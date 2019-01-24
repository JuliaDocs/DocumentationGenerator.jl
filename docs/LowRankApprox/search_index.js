var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LowRankApprox-1",
    "page": "Readme",
    "title": "LowRankApprox",
    "category": "section",
    "text": "(Image: Build Status)(Image: DOI)This Julia package provides fast low-rank approximation algorithms for BLAS/LAPACK-compatible matrices based on some of the latest technology in adaptive randomized matrix sketching. Currently implemented algorithms include:sketch methods:\nrandom Gaussian\nrandom subset\nsubsampled random Fourier transform\nsparse random Gaussian\npartial range finder\npartial factorizations:\nQR decomposition\ninterpolative decomposition\nsingular value decomposition\nHermitian eigendecomposition\nCUR decomposition\nspectral norm estimationBy \"partial\", we mean essentially that these algorithms are early-terminating, i.e., they are not simply post-truncated versions of their standard counterparts. There is also support for \"matrix-free\" linear operators described only through their action on vectors. All methods accept a number of options specifying, e.g., the rank, estimated absolute precision, and estimated relative precision of approximation.Our implementation borrows heavily from the perspective espoused by N. Halko, P.G. Martinsson, J.A. Tropp. Finding structure with randomness: Probabilistic algorithms for constructing approximate matrix decompositions. SIAM Rev. 53 (2): 217-288, 2011., except that we choose the interpolative decomposition (ID) as our basic form of approximation instead of matrix range projection. The reason is that the latter requires expensive matrix-matrix multiplication to contract to the relevant subspace, while the former can sometimes be computed much faster, depending on the accelerated sketching strategy employed.This package has been developed with performance in mind, and early tests have shown large speedups over similar codes written in MATLAB and Python (and even some in Fortran and C). For example, computing an ID of a Hilbert matrix of order 1024 to relative precision ~1e-15 takes:~0.02 s using LowRankApprox in Julia\n~0.07 s using SciPy in Python (calling a Fortran backend; see PyMatrixID)\n~0.3 s in MATLABThis difference can be attributed in part to both algorithmic improvements as well as to some low-level optimizations."
},

{
    "location": "#Contents-1",
    "page": "Readme",
    "title": "Contents",
    "category": "section",
    "text": "Installation\nGetting Started\nLow-Rank Factorizations\nQR Decomposition\nInterpolative Decomposition\nSingular Value Decomposition\nHermitian Eigendecomposition\nCUR Decomposition\nSketch Methods\nRandom Gaussian\nRandom Subset\nSubsampled Random Fourier Transform\nSparse Random Gaussian\nOther Capabilities\nPartial Range\nSpectral Norm Estimation\nCore Algorithm\nOptions\nAccuracy Options\nSketching Options\nOther Options\nComputational Complexity"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install LowRankApprox, simply type:Pkg.add(\"LowRankApprox\")at the Julia prompt. The package can then be imported as usual with using or import."
},

{
    "location": "#Getting-Started-1",
    "page": "Readme",
    "title": "Getting Started",
    "category": "section",
    "text": "To illustrate the usage of this package, let\'s consider the computation of a partial QR decomposition of a Hilbert matrix, which is well known to have low rank. First, we load LowRankApprox via:using LowRankApproxThen we construct a Hilbert matrix with:n = 1024\nA = matrixlib(:hilb, n, n)A partial QR decomposition can then be computed using:F = pqrfact(A)This returns a PartialQR factorization with variables Q, R, and p denoting the unitary, trapezoidal, and permutation factors, respectively, constituting the decomposition. Alternatively, these can be extracted directly with:Q, R, p = pqr(A)but the factorized form is often more convenient as it also implements various arithmetic operations. For example, the commands:x = rand(n)\ny = F *x\nz = F\'*xautomatically invoke specialized multiplication routines to rapidly compute y and z using the low-rank structure of F.The rank of the factorization can be retrieved by F[:k], which in this example usually gives 26 or 27. The reason for this variability is that the default interface uses randomized Gaussian sketching for acceleration. Likewise, the actual approximation error is also random but can be efficiently and robustly estimated:aerr = snormdiff(A, F)\nrerr = aerr / snorm(A)This computes the absolute and relative errors in the spectral norm using power iteration. Here, the relative error achieved should be on the order of machine epsilon. (You may see a warning about exceeding the iteration limit, but this is harmless in this case.)The default interface requests ~1e-15 estimated relative precision. To request, say, only 1e-12 relative precision, use:F = pqrfact(A, rtol=1e-12)which returns a factorization of rank ~22. We can also directly control the rank instead with, e.g.:F = pqrfact(A, rank=20)Using both together as in:F = pqrfact(A, rank=20, rtol=1e-12)sets two separate termination criteria: one on reaching rank 20 and the other on achieving estimated relative precision 1e-12–-with the computation completing upon either of these being fulfilled. Many other options are available as well. All keyword arguments can also be encapsulated into an LRAOptions type for convenience. For example, we can equivalently write the above as:opts = LRAOptions(rank=20, rtol=1e-12)\nF = pqrfact(A, opts)For further details, see the Options section.All aforementioned considerations also apply when the input is a linear operator, i.e., when the matrix is described not by its entries but by its action on vectors. To demonstrate, we can convert A to type LinearOperator as follows:L = LinearOperator(A)which inherits and stores methods for applying the matrix and its adjoint. (This command actually recognizes A as Hermitian and forms L as a HermitianLinearOperator.) A partial QR decomposition can then be computed with:F = pqrfact(L)just as in the previous case. Of course, there is no real benefit to doing so in this particular example; the advantage comes when considering complicated matrix products that can be represented implicitly as a single LinearOperator. For instance, A*A can be represented as L*L without ever forming the resultant matrix explicitly, and we can even encapsulate entire factorizations as linear operators to exploit fast multiplication:L = LinearOperator(F)Linear operators can be scaled, added, and composed together using the usual syntax. All methods in LowRankApprox transparently support both matrices and linear operators."
},

{
    "location": "#Low-Rank-Factorizations-1",
    "page": "Readme",
    "title": "Low-Rank Factorizations",
    "category": "section",
    "text": "We now detail the various low-rank approximations implemented, which all nominally return compact Factorization types storing the matrix factors in structured form. All such factorizations provide optimized multiplication routines. Furthermore, the rank of any factorization F can be queried with F[:k] and the matrix approximant defined by F can be reconstructed as Matrix(F). For concreteness of exposition, assume in the following that A has size m by n with factorization rank F[:k] = k. Note that certain matrix identities below should be interpreted only as equalities up to the approximation precision."
},

{
    "location": "#QR-Decomposition-1",
    "page": "Readme",
    "title": "QR Decomposition",
    "category": "section",
    "text": "A partial QR decomposition is a factorization A[:,p] = Q*R, where Q is m by k with orthonormal columns, R is k by n and upper trapezoidal, and p is a permutation vector. Such a decomposition can be computed with:F = pqrfact(A, args...)or more explicitly with:Q, R, p = pqr(A, args...)The former returns a PartialQR factorization with access methods:F[:Q]: Q factor as type Matrix\nF[:R]: R factor as type UpperTrapezoidal\nF[:p]: p permutation as type Vector\nF[:P]: p permutation as type ColumnPermutationBoth F[:R] and F[:P] are represented as structured matrices, complete with their own arithmetic operations, and together permit the alternative approximation formula A*F[:P] = F[:Q]*F[:R]. The factorization form additionally supports least squares solution by left-division.We can also compute a partial QR decomposition of A\' (that is, pivoting on rows instead of columns) without necessarily constructing the matrix transpose explicitly by writing:F = pqrfact(:c, A, args...)and similarly with pqr. The default interface is equivalent to, e.g.:F = pqrfact(:n, A, args...)for \"no transpose\". It is also possible to generate only a subset of the partial QR factors for further efficiency; see Options.The above methods do not modify the input matrix A and may make a copy of the data in order to enforce this (whether this is actually necessary depends on the type of input and the sketch method used). Potentially more efficient versions that reserve the right to overwrite A are available as pqrfact! and pqr!, respectively."
},

{
    "location": "#Interpolative-Decomposition-(ID)-1",
    "page": "Readme",
    "title": "Interpolative Decomposition (ID)",
    "category": "section",
    "text": "The ID is based on the approximation A[:,rd] = A[:,sk]*T, where sk is a set of k \"skeleton\" columns, rd is a set of n - k \"redundant\" columns, and T is a k by n - k interpolation matrix. It follows that A[:,p] = C*V, where p = [sk; rd], C = A[:,sk], and V = [Matrix(I,k,k) T]. An ID can be computed by:V = idfact(A, args...)or:sk, rd, T = id(A, args...)Here, V is of type IDPackedV and defines the V factor above but can also implicitly represent the entire ID via:V[:sk]: sk columns as type Vector\nV[:rd]: rd columns as type Vector\nV[:p]: p permutation as type Vector\nV[:P]: p permutation as type ColumnPermutation\nV[:T]: T factor as type MatrixTo actually produce the ID itself, use:F = ID(A, V)or:F = ID(A, sk, rd, T)which returns an ID factorization that can be directly compared with A. This factorization has access methods:F[:C]: C factor as type Matrix\nF[:V]: V factor as type IDPackedVin addition to those defined for IDPackedV.As with the partial QR decomposition, an ID can be computed for A\' instead (that is, finding skeleton rows as opposed to columns) in the same way, e.g.:V = idfact(:c, A, args...)The default interface is equivalent to passing :n as the first argument. Moreover, modifying versions of the above are available as idfact! and id!."
},

{
    "location": "#Singular-Value-Decomposition-(SVD)-1",
    "page": "Readme",
    "title": "Singular Value Decomposition (SVD)",
    "category": "section",
    "text": "A partial SVD is a factorization A = U*S*V\', where U and V are m by k and n by k, respectively, both with orthonormal columns, and S is k by k and diagonal with nonincreasing nonnegative real entries. It can be computed with:F = psvdfact(A, args...)or:U, S, V = psvd(A, args...)The factorization is of type PartialSVD and has access methods:F[:U]: U factor as type Matrix\nF[:S]: S factor as type Vector\nF[:V]: V factor as type Matrix\nF[:Vt]: V\' factor as type MatrixNote that the underlying SVD routine forms V\' as output, so F[:Vt] is easier to extract than F[:V]. Least squares solution is also supported using left-division. Furthermore, if just the singular values are required, then we can use:S = psvdvals(A, args...)"
},

{
    "location": "#Hermitian-Eigendecomposition-1",
    "page": "Readme",
    "title": "Hermitian Eigendecomposition",
    "category": "section",
    "text": "A partial Hermitian eigendecomposition of an n by n Hermitian matrix A is a factorization A = U*S*U\', where U is n by k with orthonormal columns and S is k by k and diagonal with nondecreasing real entries. It is very similar to a partial Hermitian SVD and can be computed by:F = pheigfact(A, args...)or:values, vectors = pheig(A, args...)where we have followed the Julia convention of letting values denote the eigenvalues comprising S and vectors denote the eigenvector matrix U. The factorization is of type PartialHermitianEigen and has access methods:F[:values]: values as type Vector\nF[:vectors]: vectors as type MatrixIt also supports least squares solution by left-division. If only the eigenvalues are desired, use instead:values = pheigvals(A, args...)"
},

{
    "location": "#CUR-Decomposition-1",
    "page": "Readme",
    "title": "CUR Decomposition",
    "category": "section",
    "text": "A CUR decomposition is a factorization A = C*U*R, where C = A[:,cols] and R = A[rows,:] consist of k columns and rows, respectively, from A and U = inv(A[rows,cols]). The basis rows and columns can be computed with:U = curfact(A, args...)or:rows, cols = cur(A, args...)The former is of type CURPackedU (or HermitianCURPackedU if A is Hermitian or SymmetricCURPackedU if symmetric) and has access methods:U[:cols]: cols columns as type Vector\nU[:rows]: rows rows as type VectorTo produce the corresponding CUR decomposition, use:F = CUR(A, U)or:F = CUR(A, rows, cols)which returns a CUR factorization (or HermitianCUR if A is Hermitian or SymmetricCUR if symmetric), with access methods:F[:C]: C factor as type Matrix\nF[:U]: U factor as type Factorization\nF[:R]: R factor as type Matrixin addition to those defined for CURPackedU. If F is of type HermitianCUR, then F[:R] = F[:C]\', while if F has type SymmetricCUR, then F[:R] = transpose(F[:C]). Note that because of conditioning issues, U is not stored explicitly but rather in factored form, nominally as type SVD but practically as PartialHermitianEigen if U has type HermitianCURPackedU or PartialSVD otherwise (for convenient arithmetic operations).Modifying versions of the above are available as curfact! and cur!."
},

{
    "location": "#Sketch-Methods-1",
    "page": "Readme",
    "title": "Sketch Methods",
    "category": "section",
    "text": "Matrix sketching is a core component of this package and its proper use is critical for high performance. For an m by n matrix A, a sketch of order k takes the form B = S*A, where S is a k by m sampling matrix (see below). Sketches can similarly be constructed for sampling from the right or for multiplying against A\'. The idea is that B contains a compressed representation of A up to rank approximately k, which can then be efficiently processed to recover information about A.The default sketch method defines S as a Gaussian random matrix. Other sketch methods can be specified using the keyword sketch. For example, setting:opts = LRAOptions(sketch=:srft, args...)or equivalently:opts = LRAOptions(args...)\nopts.sketch = :srftthen passing to, e.g.:V = idfact(A, opts)computes an ID with sketching via a subsampled random Fourier transform (SRFT). This can also be done more directly with:V = idfact(A, sketch=:srft)A list of supported sketch methods is given below. To disable sketching altogether, use:opts.sketch = :noneIn addition to its integration with low-rank factorization methods, sketches can also be generated independently by:B = sketch(A, order, args...)Other interfaces include:B = sketch(:left, :n, A, order, args...) to compute B = S*A\nB = sketch(:left, :c, A, order, args...) to compute B = S*A\'\nB = sketch(:right, :n, A, order, args...) to compute B = A*S\nB = sketch(:right, :c, A, order, args...) to compute B = A\'*SWe also provide adaptive routines to automatically sketch with increasing orders until a specified error tolerance is met, as detected by early termination of an unaccelerated partial QR decomposition. This adaptive sketching forms the basis for essentially all higher-level algorithms in LowRankApprox and can be called with:F = sketchfact(A, args...)Like sketch, a more detailed interface is also available as:F = sketchfact(side, trans, A, args...)"
},

{
    "location": "#Random-Gaussian-1",
    "page": "Readme",
    "title": "Random Gaussian",
    "category": "section",
    "text": "The canonical sampling matrix is a Gaussian random matrix with entries drawn independently from the standard normal distribution (or with real and imaginary parts each drawn independently if A is complex). To use this sketch method, set:opts.sketch = :randnThere is also support for power iteration to improve accuracy when the spectral gap (up to rank k) is small. This computes, e.g., B = S*(A*A\')^p*A (or simply B = S*A^(p + 1) if A is Hermitian) instead of just B = S*A, with all intermediate matrix products orthogonalized for stability.For generic A, Gaussian sketching has complexity O(k*m*n). In principle, this can make it the most expensive stage of computing a fast low-rank approximation (though in practice it is still very effective). There is a somewhat serious effort to develop sketch methods with lower computational cost, which is addressed in part by the following techniques."
},

{
    "location": "#Random-Subset-1",
    "page": "Readme",
    "title": "Random Subset",
    "category": "section",
    "text": "Perhaps the simplest matrix sketch is just a random subset of rows or columns, with complexity O(k*m) or O(k*n) as appropriate. This can be specified with:opts.sketch = :subThe linear growth in matrix dimension is obviously attractive, but note that this method can fail if the matrix is not sufficiently \"regular\", e.g., if it contains a few large isolated entries. Random subselection is only implemented for type AbstractMatrix."
},

{
    "location": "#Subsampled-Random-Fourier-Transform-(SRFT)-1",
    "page": "Readme",
    "title": "Subsampled Random Fourier Transform (SRFT)",
    "category": "section",
    "text": "An alternative approach based on imposing structure in the sampling matrix is the SRFT, which has the form S = R*F*D (if applying from the left), where R is a random permutation matrix of size k by m, F is the discrete Fourier transform (DFT) of order m, and D is a random diagonal unitary scaling. Due to the DFT structure, this can be applied in only O(m*n*log(k)) operations (but beware that the constant is quite high). To use this method, set:opts.sketch = :srftFor real A, our SRFT implementation uses only real arithmetic by separately computing real and imaginary parts as in a standard real-to-real DFT. Only AbstractMatrix types are supported."
},

{
    "location": "#Sparse-Random-Gaussian-1",
    "page": "Readme",
    "title": "Sparse Random Gaussian",
    "category": "section",
    "text": "As a modification of Gaussian sketching, we provide also a \"sparse\" random Gaussian sampling scheme, wherein S is restricted to have only O(m) or O(n) nonzeros, depending on the dimension to be contracted. Considering the case B = S*A for concreteness, each row of S is taken to be nonzero in only O(m/k) columns, with full coverage of A maintained by evenly spreading these nonzero indices among the rows of S. The complexity of computing B is O(m*n). Sparse Gaussian sketching can be specified with:opts.sketch = :sprnand is only implemented for type AbstractMatrix. Power iteration is not supported since any subsequent matrix application would devolve back to having O(k*m*n) cost."
},

{
    "location": "#Other-Capabilities-1",
    "page": "Readme",
    "title": "Other Capabilities",
    "category": "section",
    "text": "We also provide a few other useful relevant algorithms as follows. Let A be an m by n matrix."
},

{
    "location": "#Partial-Range-1",
    "page": "Readme",
    "title": "Partial Range",
    "category": "section",
    "text": "A basis for the partial range of A of rank k is an m by k matrix Q with orthonormal columns such that A = Q*Q\'*A. Such a basis can be computed with:Q = prange(A, args...)Fast range approximation using sketching is supported.The default interface computes a basis for the column space of A. To capture the row space instead, use:Q = prange(:c, A, args...)which is equivalent to computing the partial range of A\'. The resulting matrix Q is n by k with orthonormal rows and satisfies A = A*Q*Q\'. It is also possible to approximate both the row and column spaces simultaneously with:Q = prange(:b, A, args...)Then A = Q*Q\'*A*Q*Q\'.A possibly modifying version is available as prange!."
},

{
    "location": "#Spectral-Norm-Estimation-1",
    "page": "Readme",
    "title": "Spectral Norm Estimation",
    "category": "section",
    "text": "The spectral norm of A can be rapidly computed using randomized power iteration via:err = snorm(A, args...)Similarly, the spectral norm difference of two matrices A and B can be computed with:err = snormdiff(A, B, args...)which admits both a convenient and efficient way to test the accuracy of our low-rank approximations."
},

{
    "location": "#Core-Algorithm-1",
    "page": "Readme",
    "title": "Core Algorithm",
    "category": "section",
    "text": "The underlying algorithm behind LowRankApprox is the pivoted QR decomposition, with the magnitudes of the pivots providing an estimate of the approximation error incurred at each truncation rank. Here, we use an early-terminating variant of the LAPACK routine GEQP3. The partial QR decomposition so constructed is then leveraged into an ID to support the various other factorizations.Due to its fundamental importance, we can also perform optional determinant maximization post-processing to obtain a (strong) rank-revealing QR (RRQR) decomposition. This ensures that we select the best column pivots and can further improve numerical precision and stability."
},

{
    "location": "#Options-1",
    "page": "Readme",
    "title": "Options",
    "category": "section",
    "text": "Numerous options are exposed by the LRAOptions type, which we will cover by logical function below."
},

{
    "location": "#Accuracy-Options-1",
    "page": "Readme",
    "title": "Accuracy Options",
    "category": "section",
    "text": "The accuracy of any low-rank approximation (in the spectral norm) is controlled by the following parameters:atol: absolute tolerance of approximation (default: 0)\nrtol: relative tolerance of approximation (default: 5*eps())\nrank: maximum rank of approximation (default: -1)Each parameter specifies an independent termination criterion; the computation completes when any of them are met. Currently, atol and rtol are checked against QR pivot magnitudes and thus accuracy can only be approximately guaranteed, though the resulting errors should be of the correct order.Iterative RRQR post-processing is also available:maxdet_niter: maximum number of iterations for determinant maximization (default: -1)\nmaxdet_tol: relative tolerance for determinant maximization (default: -1)If maxdet_tol < 0, no post-processing is done; otherwise, as above, each parameter specifies an independent termination criterion. These options have an impact on all factorizations (i.e., not just QR) since they all involve, at some level, approximations based on the QR. For example, computing an ID via an RRQR guarantees that the interpolation matrix T satisfies maxabs(T) < 1 + maxdet_tol (assuming no early termination due to maxdet_niter).The parameters atol and rtol are also used for the spectral norm estimation routines snorm and snormdiff to specify the requested precision of the (scalar) norm output."
},

{
    "location": "#Sketching-Options-1",
    "page": "Readme",
    "title": "Sketching Options",
    "category": "section",
    "text": "The following parameters govern matrix sketching:sketch: sketch method, one of :none, :randn (default), :srft, :sub, or :sprn\nsketch_randn_niter: number of power iterations for Gaussian sketching (default: 0)\nsketchfact_adap: whether to compute a sketched factorization adaptively by successively doubling the sketch order (default: true); if false only takes effect if rank >= 0, in which case a single sketch of order rank is (partially) factorized\nsketchfact_randn_samp: oversampling function for Gaussian sketching (default: n -> n + 8)\nsketchfact_srft_samp: oversampling function for SRFT sketching (default: n -> n + 8)\nsketchfact_sub_samp: oversampling function for subset sketching (default: n -> 4*n + 8)The oversampling functions take as input a desired approximation rank and return a corresponding sketch order designed to be able to capture it with high probability. No oversampling function is used for sparse random Gaussian sketching due to its special form."
},

{
    "location": "#Other-Options-1",
    "page": "Readme",
    "title": "Other Options",
    "category": "section",
    "text": "Other available options include:nb: computational block size, used in various settings (default: 32)\npheig_orthtol: eigenvalue relative tolerance to identify degenerate subspaces, within which eigenvectors are re-orthonormalized (to combat LAPACK issue; default: sqrt(eps()))\npqrfact_retval: string containing keys indicating which outputs to return from pqrfact (default: \"qr\")\n\"q\": orthonormal Q matrix\n\"r\": trapezoidal R matrix\n\"t\": interpolation T matrix (for ID)\nsnorm_niter: maximum number of iterations for spectral norm estimation (default: 32)\nverb: whether to print verbose messages, used sparingly (default: true)Note that pqrfact always returns the permutation vector p so that no specification is needed in pqrfact_retval. If pqrfact_retval = \"qr\" (in some order), then the output factorization has type PartialQR; otherwise, it is of type PartialQRFactors, which is simply a container type with no defined arithmetic operations. All keys other than \"q\", \"r\", and \"t\" are ignored."
},

{
    "location": "#Computational-Complexity-1",
    "page": "Readme",
    "title": "Computational Complexity",
    "category": "section",
    "text": "Below, we summarize the leading-order computational costs of each factorization function depending on the sketch type. Assume an input AbstractMatrix of size m by n with numerical rank k << min(m, n) and O(1) cost to compute each entry. Then, first, for a non-adaptive computation (i.e., k is known essentially a priori):function none randn sub srft sprn\npqr k*m*n k*m*n k^2*(m + n) m*n*log(k) m*n\nid k*m*n k*m*n k^2*n + k*m m*n*log(k) m*n\nsvd k*m*n k*m*n k^2*(m + n) m*n*log(k) m*n\npheig k*m*n k*m*n k^2*(m + n) m*n*log(k) m*n\ncur k*m*n k*m*n k^2*(m + n) m*n*log(k) m*nThe cost given for the ID is for the default column-oriented version; to obtain the operation count for a row-oriented ID, simply switch the roles of m and n. Note also that pheig is only applicable to square matrices, i.e., m = n.All of the above remain unchanged for sketchfact_adap = true with the exception of the following, in which case the costs become:sketch = :srft: m*n*log(k)^2\nsketch = :sprn: m*n*log(k)uniformly across all functions."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LowRankApprox]\nOrder = [:type, :function]"
},

]}
