let dataset = [
    { x: 188, y: 484, z: 273 },
    { x: 85, y: 346, z: 205 },
    { x: 321, y: 185, z: 145 },
    { x: 204, y: 300, z: 367 },
    { x: 262, y: 3, z: 295 },
    { x: 417, y: 49, z: 324 },
    { x: 39, y: 56, z: 239 },
    { x: 325, y: 297, z: 147 },
    { x: 64, y: 53, z: 301 },
    { x: 469, y: 442, z: 242 },
    { x: 457, y: 306, z: 93 },
    { x: 35, y: 5, z: 134 },
    { x: 387, y: 129, z: 7 },
    { x: 162, y: 342, z: 336 },
    { x: 342, y: 456, z: 178 },
    { x: 489, y: 222, z: 477 },
    { x: 87, y: 74, z: 124 },
    { x: 458, y: 55, z: 445 },
    { x: 352, y: 335, z: 480 },
    { x: 314, y: 96, z: 115 },
    { x: 491, y: 325, z: 87 },
    { x: 151, y: 154, z: 162 },
    { x: 87, y: 472, z: 56 },
    { x: 349, y: 113, z: 226 },
    { x: 127, y: 234, z: 121 },
    { x: 274, y: 129, z: 235 },
    { x: 152, y: 197, z: 203 },
    { x: 461, y: 342, z: 444 },
    { x: 341, y: 169, z: 463 },
    { x: 372, y: 189, z: 363 },
    { x: 461, y: 278, z: 180 },
    { x: 210, y: 85, z: 439 },
    { x: 164, y: 167, z: 391 },
    { x: 68, y: 246, z: 395 },
    { x: 258, y: 220, z: 127 },
    { x: 215, y: 185, z: 319 },
    { x: 228, y: 146, z: 119 },
    { x: 469, y: 15, z: 59 },
    { x: 174, y: 461, z: 440 },
    { x: 423, y: 439, z: 133 },
    { x: 116, y: 79, z: 33 },
    { x: 354, y: 130, z: 96 },
    { x: 410, y: 113, z: 371 },
    { x: 1, y: 239, z: 228 },
    { x: 486, y: 122, z: 473 },
    { x: 458, y: 223, z: 79 },
    { x: 498, y: 381, z: 136 },
    { x: 56, y: 259, z: 2 },
    { x: 318, y: 34, z: 470 },
    { x: 480, y: 255, z: 64 },
    { x: 71, y: 48, z: 41 },
    { x: 180, y: 27, z: 402 },
    { x: 95, y: 169, z: 250 },
    { x: 344, y: 247, z: 159 },
    { x: 397, y: 187, z: 240 },
    { x: 144, y: 342, z: 47 },
    { x: 293, y: 296, z: 456 },
    { x: 375, y: 36, z: 415 },
    { x: 278, y: 108, z: 257 },
    { x: 406, y: 128, z: 250 },
    { x: 26, y: 155, z: 396 },
    { x: 263, y: 94, z: 421 },
    { x: 26, y: 497, z: 147 },
    { x: 90, y: 195, z: 396 },
    { x: 462, y: 39, z: 387 },
    { x: 172, y: 466, z: 174 },
    { x: 115, y: 108, z: 41 },
    { x: 199, y: 201, z: 347 },
    { x: 333, y: 217, z: 63 },
    { x: 180, y: 49, z: 334 },
    { x: 404, y: 372, z: 277 },
    { x: 500, y: 467, z: 151 },
    { x: 321, y: 13, z: 307 },
    { x: 69, y: 470, z: 48 },
    { x: 35, y: 95, z: 356 },
    { x: 146, y: 374, z: 293 },
    { x: 350, y: 279, z: 427 },
    { x: 28, y: 90, z: 80 },
    { x: 380, y: 397, z: 206 },
    { x: 475, y: 401, z: 227 },
    { x: 279, y: 428, z: 376 },
    { x: 400, y: 7, z: 39 },
    { x: 332, y: 211, z: 459 },
    { x: 125, y: 409, z: 481 },
    { x: 224, y: 227, z: 453 },
    { x: 153, y: 332, z: 335 },
    { x: 192, y: 489, z: 307 },
    { x: 89, y: 83, z: 69 },
    { x: 106, y: 488, z: 362 },
    { x: 367, y: 418, z: 37 },
    { x: 265, y: 63, z: 321 },
    { x: 343, y: 447, z: 107 },
    { x: 361, y: 120, z: 460 },
    { x: 140, y: 100, z: 18 },
    { x: 174, y: 219, z: 313 },
    { x: 332, y: 85, z: 62 },
    { x: 27, y: 343, z: 495 },
    { x: 110, y: 491, z: 478 },
    { x: 130, y: 29, z: 0 },
    { x: 347, y: 424, z: 256 },
    { x: 369, y: 385, z: 143 },
    { x: 275, y: 260, z: 458 },
    { x: 219, y: 300, z: 232 },
    { x: 405, y: 329, z: 449 },
    { x: 446, y: 306, z: 71 },
    { x: 30, y: 112, z: 32 },
    { x: 162, y: 198, z: 36 },
    { x: 162, y: 496, z: 66 },
    { x: 335, y: 208, z: 290 },
    { x: 138, y: 28, z: 6 },
    { x: 488, y: 378, z: 247 },
    { x: 282, y: 288, z: 13 },
    { x: 435, y: 189, z: 302 },
    { x: 302, y: 404, z: 364 },
    { x: 340, y: 422, z: 326 },
    { x: 348, y: 393, z: 254 },
    { x: 154, y: 154, z: 456 },
    { x: 284, y: 296, z: 159 },
    { x: 166, y: 198, z: 33 },
    { x: 425, y: 55, z: 342 },
    { x: 312, y: 147, z: 230 },
    { x: 306, y: 119, z: 417 },
    { x: 219, y: 425, z: 252 },
    { x: 101, y: 395, z: 315 },
    { x: 408, y: 499, z: 413 },
    { x: 109, y: 12, z: 269 },
    { x: 224, y: 137, z: 200 },
    { x: 14, y: 334, z: 287 },
    { x: 352, y: 85, z: 423 },
    { x: 102, y: 377, z: 273 },
    { x: 89, y: 32, z: 177 },
    { x: 257, y: 49, z: 164 },
    { x: 494, y: 487, z: 156 },
    { x: 317, y: 178, z: 352 },
    { x: 403, y: 315, z: 157 },
    { x: 350, y: 108, z: 452 },
    { x: 77, y: 22, z: 122 },
    { x: 1, y: 462, z: 428 },
    { x: 203, y: 241, z: 283 },
    { x: 393, y: 160, z: 97 },
    { x: 144, y: 268, z: 211 },
    { x: 260, y: 44, z: 206 },
    { x: 120, y: 454, z: 479 },
    { x: 260, y: 158, z: 347 },
    { x: 154, y: 395, z: 497 },
    { x: 487, y: 147, z: 121 },
    { x: 135, y: 416, z: 404 },
    { x: 294, y: 368, z: 50 },
    { x: 210, y: 243, z: 143 },
    { x: 97, y: 322, z: 113 },
    { x: 33, y: 159, z: 292 },
    { x: 206, y: 404, z: 77 },
    { x: 379, y: 152, z: 47 },
    { x: 436, y: 175, z: 69 },
    { x: 277, y: 426, z: 279 },
    { x: 351, y: 488, z: 458 },
    { x: 391, y: 196, z: 69 },
    { x: 403, y: 451, z: 436 },
    { x: 55, y: 135, z: 234 },
    { x: 126, y: 175, z: 211 },
    { x: 203, y: 445, z: 220 },
    { x: 113, y: 414, z: 99 },
    { x: 426, y: 404, z: 175 },
    { x: 491, y: 288, z: 324 },
    { x: 253, y: 135, z: 13 },
    { x: 479, y: 159, z: 49 },
    { x: 122, y: 372, z: 278 },
    { x: 280, y: 494, z: 408 },
    { x: 175, y: 416, z: 12 },
    { x: 489, y: 284, z: 479 },
    { x: 54, y: 5, z: 61 },
    { x: 277, y: 471, z: 487 },
    { x: 247, y: 481, z: 362 },
    { x: 422, y: 306, z: 77 },
    { x: 174, y: 463, z: 483 },
    { x: 462, y: 239, z: 308 },
    { x: 388, y: 493, z: 272 },
    { x: 259, y: 80, z: 357 },
    { x: 267, y: 427, z: 235 },
    { x: 144, y: 140, z: 231 },
    { x: 318, y: 171, z: 139 },
    { x: 119, y: 360, z: 253 },
    { x: 280, y: 227, z: 88 },
    { x: 243, y: 433, z: 199 },
    { x: 478, y: 17, z: 141 },
    { x: 151, y: 81, z: 490 },
    { x: 262, y: 114, z: 378 },
    { x: 239, y: 412, z: 57 },
    { x: 394, y: 481, z: 251 },
    { x: 143, y: 258, z: 125 },
    { x: 295, y: 318, z: 108 },
    { x: 267, y: 346, z: 27 },
    { x: 46, y: 133, z: 115 },
    { x: 213, y: 358, z: 75 },
    { x: 355, y: 276, z: 89 },
    { x: 144, y: 388, z: 477 },
    { x: 458, y: 371, z: 7 },
    { x: 189, y: 393, z: 20 },
    { x: 138, y: 309, z: 215 },
    { x: 93, y: 380, z: 296 },
    { x: 406, y: 91, z: 28 },
    { x: 190, y: 243, z: 41 },
    { x: 242, y: 114, z: 210 },
    { x: 72, y: 65, z: 54 },
    { x: 360, y: 310, z: 178 },
    { x: 127, y: 432, z: 259 },
    { x: 5, y: 442, z: 14 },
    { x: 474, y: 20, z: 350 },
    { x: 110, y: 500, z: 130 },
    { x: 480, y: 495, z: 10 },
    { x: 498, y: 270, z: 107 },
    { x: 36, y: 452, z: 233 },
    { x: 4, y: 387, z: 378 },
    { x: 169, y: 183, z: 377 },
    { x: 341, y: 259, z: 21 },
    { x: 123, y: 117, z: 490 },
    { x: 107, y: 116, z: 187 },
    { x: 68, y: 263, z: 259 },
    { x: 71, y: 436, z: 299 },
    { x: 420, y: 19, z: 11 },
    { x: 122, y: 499, z: 377 },
    { x: 392, y: 223, z: 392 },
    { x: 442, y: 144, z: 162 },
    { x: 128, y: 303, z: 247 },
    { x: 31, y: 427, z: 32 },
    { x: 184, y: 352, z: 192 },
    { x: 187, y: 296, z: 353 },
    { x: 202, y: 485, z: 338 },
    { x: 288, y: 311, z: 14 },
    { x: 270, y: 38, z: 73 },
    { x: 233, y: 180, z: 337 },
    { x: 459, y: 359, z: 205 },
    { x: 283, y: 34, z: 253 },
    { x: 242, y: 286, z: 385 },
    { x: 415, y: 458, z: 157 },
    { x: 150, y: 206, z: 370 },
    { x: 166, y: 275, z: 411 },
    { x: 376, y: 351, z: 278 },
    { x: 441, y: 408, z: 20 },
    { x: 221, y: 58, z: 2 },
    { x: 87, y: 425, z: 135 },
    { x: 80, y: 99, z: 390 },
    { x: 96, y: 34, z: 497 },
    { x: 339, y: 371, z: 345 },
    { x: 489, y: 368, z: 374 },
    { x: 303, y: 223, z: 340 },
    { x: 440, y: 108, z: 79 },
    { x: 409, y: 334, z: 440 },
    { x: 416, y: 236, z: 4 },
    { x: 429, y: 346, z: 25 },
    { x: 95, y: 75, z: 208 },
    { x: 210, y: 309, z: 72 },
    { x: 376, y: 389, z: 307 },
    { x: 489, y: 247, z: 372 },
    { x: 77, y: 62, z: 130 },
    { x: 140, y: 226, z: 135 },
    { x: 397, y: 255, z: 47 },
    { x: 50, y: 140, z: 45 },
    { x: 321, y: 233, z: 307 },
    { x: 347, y: 416, z: 387 },
    { x: 432, y: 462, z: 218 },
    { x: 263, y: 162, z: 31 },
    { x: 232, y: 405, z: 307 },
    { x: 92, y: 150, z: 271 },
    { x: 16, y: 251, z: 335 },
    { x: 388, y: 232, z: 75 },
    { x: 363, y: 169, z: 83 },
    { x: 349, y: 88, z: 83 },
    { x: 438, y: 324, z: 34 },
    { x: 428, y: 384, z: 148 },
    { x: 355, y: 401, z: 436 },
    { x: 27, y: 419, z: 19 },
    { x: 323, y: 161, z: 232 },
    { x: 288, y: 500, z: 207 },
    { x: 342, y: 490, z: 230 },
    { x: 371, y: 385, z: 148 },
    { x: 102, y: 241, z: 437 },
    { x: 464, y: 357, z: 413 },
    { x: 307, y: 473, z: 420 },
    { x: 303, y: 81, z: 158 },
    { x: 150, y: 217, z: 226 },
    { x: 179, y: 23, z: 316 },
    { x: 159, y: 214, z: 139 },
    { x: 65, y: 349, z: 108 },
    { x: 488, y: 54, z: 328 },
    { x: 416, y: 108, z: 337 },
    { x: 108, y: 269, z: 204 },
    { x: 199, y: 169, z: 299 },
    { x: 407, y: 320, z: 308 },
    { x: 31, y: 117, z: 93 },
    { x: 183, y: 315, z: 104 },
    { x: 178, y: 346, z: 493 },
    { x: 106, y: 372, z: 289 },
    { x: 341, y: 309, z: 22 },
    { x: 327, y: 226, z: 272 },
    { x: 233, y: 499, z: 24 },
    { x: 434, y: 233, z: 254 },
    { x: 434, y: 169, z: 346 },
    { x: 405, y: 6, z: 454 },
    { x: 468, y: 258, z: 407 },
    { x: 307, y: 267, z: 372 },
    { x: 39, y: 60, z: 419 },
    { x: 460, y: 281, z: 416 },
    { x: 468, y: 383, z: 182 },
    { x: 442, y: 18, z: 87 },
    { x: 140, y: 489, z: 391 },
    { x: 162, y: 58, z: 350 },
    { x: 313, y: 35, z: 32 },
    { x: 353, y: 211, z: 387 },
    { x: 4, y: 424, z: 225 },
    { x: 266, y: 428, z: 362 },
    { x: 202, y: 463, z: 16 },
    { x: 92, y: 412, z: 160 },
    { x: 432, y: 413, z: 192 },
    { x: 300, y: 374, z: 309 },
    { x: 225, y: 432, z: 36 },
    { x: 7, y: 138, z: 22 },
    { x: 320, y: 277, z: 394 },
    { x: 43, y: 352, z: 237 },
    { x: 81, y: 25, z: 405 },
    { x: 176, y: 83, z: 445 },
    { x: 441, y: 414, z: 313 },
    { x: 14, y: 493, z: 214 },
    { x: 373, y: 225, z: 358 },
    { x: 290, y: 28, z: 495 },
    { x: 87, y: 246, z: 466 },
    { x: 443, y: 464, z: 395 },
    { x: 125, y: 292, z: 104 },
    { x: 185, y: 240, z: 210 },
    { x: 304, y: 499, z: 313 },
    { x: 350, y: 24, z: 115 },
    { x: 300, y: 485, z: 420 },
    { x: 467, y: 45, z: 287 },
    { x: 425, y: 23, z: 219 },
    { x: 74, y: 450, z: 146 },
    { x: 100, y: 432, z: 127 },
    { x: 377, y: 440, z: 163 },
    { x: 223, y: 161, z: 188 },
    { x: 466, y: 469, z: 346 },
    { x: 136, y: 445, z: 10 },
    { x: 284, y: 401, z: 214 },
    { x: 421, y: 20, z: 195 },
    { x: 278, y: 211, z: 366 },
    { x: 271, y: 340, z: 370 },
    { x: 76, y: 246, z: 171 },
    { x: 114, y: 56, z: 347 },
    { x: 3, y: 441, z: 425 },
    { x: 226, y: 162, z: 41 },
    { x: 474, y: 146, z: 300 },
    { x: 231, y: 132, z: 376 },
    { x: 368, y: 409, z: 79 },
    { x: 64, y: 464, z: 66 },
    { x: 338, y: 486, z: 431 },
    { x: 182, y: 56, z: 385 },
    { x: 28, y: 226, z: 180 },
    { x: 5, y: 195, z: 499 },
    { x: 223, y: 487, z: 490 },
    { x: 295, y: 88, z: 66 },
    { x: 291, y: 169, z: 489 },
    { x: 286, y: 25, z: 45 },
    { x: 265, y: 349, z: 41 },
    { x: 122, y: 112, z: 418 },
    { x: 124, y: 118, z: 458 },
    { x: 385, y: 464, z: 426 },
    { x: 498, y: 217, z: 139 },
    { x: 428, y: 319, z: 131 },
    { x: 332, y: 72, z: 111 },
    { x: 203, y: 229, z: 175 },
    { x: 415, y: 435, z: 234 },
    { x: 97, y: 413, z: 160 },
    { x: 252, y: 284, z: 418 },
    { x: 461, y: 260, z: 42 },
    { x: 353, y: 187, z: 237 },
    { x: 137, y: 64, z: 237 },
    { x: 215, y: 115, z: 169 },
    { x: 377, y: 406, z: 233 },
    { x: 167, y: 367, z: 304 },
    { x: 85, y: 3, z: 151 },
    { x: 19, y: 104, z: 399 },
    { x: 487, y: 445, z: 279 },
    { x: 142, y: 429, z: 65 },
    { x: 1, y: 385, z: 98 },
    { x: 212, y: 376, z: 245 },
    { x: 257, y: 177, z: 92 },
    { x: 387, y: 176, z: 40 },
    { x: 323, y: 426, z: 238 },
    { x: 235, y: 330, z: 414 },
    { x: 82, y: 347, z: 92 },
    { x: 157, y: 372, z: 376 },
    { x: 28, y: 20, z: 201 },
    { x: 126, y: 131, z: 253 },
    { x: 363, y: 24, z: 145 },
    { x: 155, y: 266, z: 387 },
    { x: 473, y: 371, z: 116 },
    { x: 273, y: 33, z: 437 },
    { x: 376, y: 406, z: 438 },
    { x: 241, y: 155, z: 473 },
    { x: 257, y: 363, z: 237 },
    { x: 500, y: 458, z: 221 },
    { x: 393, y: 288, z: 286 },
    { x: 135, y: 81, z: 488 },
    { x: 25, y: 108, z: 206 },
    { x: 151, y: 169, z: 21 },
    { x: 21, y: 70, z: 130 },
    { x: 237, y: 492, z: 481 },
    { x: 377, y: 207, z: 123 },
    { x: 315, y: 43, z: 327 },
    { x: 321, y: 63, z: 358 },
    { x: 483, y: 384, z: 29 },
    { x: 73, y: 160, z: 20 },
    { x: 354, y: 391, z: 485 },
    { x: 135, y: 273, z: 155 },
    { x: 242, y: 89, z: 224 },
    { x: 133, y: 285, z: 154 },
    { x: 169, y: 49, z: 385 },
    { x: 95, y: 219, z: 234 },
    { x: 162, y: 181, z: 274 },
    { x: 9, y: 122, z: 454 },
    { x: 232, y: 366, z: 496 },
    { x: 115, y: 377, z: 125 },
    { x: 201, y: 7, z: 495 },
    { x: 290, y: 368, z: 308 },
    { x: 381, y: 94, z: 198 },
    { x: 226, y: 37, z: 24 },
    { x: 226, y: 184, z: 467 },
    { x: 247, y: 487, z: 356 },
    { x: 367, y: 176, z: 184 },
    { x: 19, y: 8, z: 495 },
    { x: 336, y: 451, z: 5 },
    { x: 164, y: 1, z: 431 },
    { x: 460, y: 12, z: 55 },
    { x: 494, y: 287, z: 347 },
    { x: 79, y: 470, z: 123 },
    { x: 267, y: 251, z: 480 },
    { x: 333, y: 58, z: 21 },
    { x: 121, y: 159, z: 410 },
    { x: 354, y: 190, z: 441 },
    { x: 181, y: 199, z: 110 },
    { x: 321, y: 235, z: 77 },
    { x: 249, y: 444, z: 34 },
    { x: 265, y: 220, z: 89 },
    { x: 246, y: 409, z: 403 },
    { x: 427, y: 416, z: 293 },
    { x: 403, y: 457, z: 343 },
    { x: 115, y: 189, z: 446 },
    { x: 102, y: 9, z: 146 },
    { x: 235, y: 358, z: 420 },
    { x: 113, y: 344, z: 10 },
    { x: 233, y: 235, z: 202 },
    { x: 211, y: 100, z: 450 },
    { x: 288, y: 428, z: 282 },
    { x: 329, y: 184, z: 441 },
    { x: 32, y: 466, z: 495 },
    { x: 219, y: 57, z: 451 },
    { x: 159, y: 282, z: 80 },
    { x: 446, y: 273, z: 91 },
    { x: 206, y: 390, z: 419 },
    { x: 265, y: 314, z: 103 },
    { x: 112, y: 18, z: 246 },
    { x: 26, y: 457, z: 91 },
    { x: 95, y: 122, z: 208 },
    { x: 103, y: 447, z: 21 },
    { x: 14, y: 183, z: 360 },
    { x: 202, y: 254, z: 437 },
    { x: 410, y: 203, z: 264 },
    { x: 294, y: 253, z: 366 },
    { x: 481, y: 481, z: 179 },
    { x: 51, y: 477, z: 39 },
    { x: 372, y: 66, z: 400 },
    { x: 361, y: 152, z: 232 },
    { x: 309, y: 341, z: 32 },
    { x: 26, y: 300, z: 106 },
    { x: 233, y: 5, z: 402 },
    { x: 192, y: 39, z: 451 },
    { x: 29, y: 61, z: 331 },
    { x: 48, y: 195, z: 120 },
    { x: 320, y: 251, z: 187 },
    { x: 152, y: 247, z: 363 },
    { x: 91, y: 49, z: 393 },
    { x: 228, y: 274, z: 164 },
    { x: 277, y: 38, z: 58 },
    { x: 216, y: 31, z: 328 },
    { x: 9, y: 121, z: 430 },
    { x: 198, y: 257, z: 63 },
    { x: 152, y: 25, z: 177 },
    { x: 473, y: 449, z: 183 },
    { x: 265, y: 193, z: 177 },
    { x: 242, y: 97, z: 57 },
    { x: 313, y: 130, z: 376 },
    { x: 5, y: 342, z: 185 },
    { x: 111, y: 191, z: 330 },
    { x: 477, y: 324, z: 436 },
    { x: 303, y: 54, z: 31 },
    { x: 89, y: 297, z: 115 },
    { x: 223, y: 309, z: 440 },
    { x: 222, y: 371, z: 49 },
    { x: 67, y: 373, z: 170 },
    { x: 163, y: 130, z: 33 },
    { x: 163, y: 130, z: 33 },
    { x: 336, y: 159, z: 149 },
    { x: 387, y: 129, z: 7 },

];

function DistanceCalc(x1, y1, z1, x2, y2, z2) {
    return parseFloat((Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2) + Math.pow((z1 - z2), 2))).toFixed(2));

}

function compare(d1, d2, d3) {
    if (d1 < d2 && d1 < d3) {
        return d1;
    } else if (d2 < d1 && d2 < d3) {
        return d2;
    } else {
        return d3;
    }
}

var cluster1 = [];
var cluster2 = [];
var cluster3 = [];


function iteration(avgX1, avgY1, avgZ1, avgX2, avgY2, avgZ2, avgX3, avgY3, avgZ3) {

    for (let i = 0; i < dataset.length; i++) {
        let d1 = DistanceCalc(avgX1, avgY1, avgZ1, dataset[i].x, dataset[i].y, dataset[i].z);
        let d2 = DistanceCalc(avgX2, avgY2, avgZ2, dataset[i].x, dataset[i].y, dataset[i].z);
        let d3 = DistanceCalc(avgX3, avgY3, avgZ3, dataset[i].x, dataset[i].y, dataset[i].z);

        var results = compare(d1, d2, d3);

        if (results == d1) {
            cluster1.push(i);
        } else if (results == d2) {
            cluster2.push(i);
        } else if (results == d3) {
            cluster3.push(i);
        }

    }
}

function inital(centroid1, centroid2, centroid3) {
    var avgX1 = dataset[centroid1].x;
    var avgY1 = dataset[centroid1].y;
    var avgZ1 = dataset[centroid1].z;


    var avgX2 = dataset[centroid2].x;
    var avgY2 = dataset[centroid2].y;
    var avgZ2 = dataset[centroid2].z;

    var avgX3 = dataset[centroid3].x;
    var avgY3 = dataset[centroid3].y;
    var avgZ3 = dataset[centroid3].z;

    iteration(avgX1, avgY1, avgZ1, avgX2, avgY2, avgZ2, avgX3, avgY3, avgZ3);
}


var x1, y1, z1, x2, y2, z2, x3, y3, z3;


function AverageCentroid() {
    var avgX1 = 0;
    var avgY1 = 0;
    var avgZ1 = 0;

    var avgX2 = 0;
    var avgY2 = 0;
    var avgZ2 = 0;

    var avgX3 = 0;
    var avgY3 = 0;
    var avgZ3 = 0;


    for (var i = 0; i < cluster1.length; i++) {

        var avgX1 = avgX1 + dataset[cluster1[i]].x;
        var avgY1 = avgY1 + dataset[cluster1[i]].y;
        var avgZ1 = avgZ1 + dataset[cluster1[i]].z;
    }

    var avgX1 = parseFloat((avgX1 / cluster1.length).toFixed(1));
    var avgY1 = parseFloat((avgY1 / cluster1.length).toFixed(1));
    var avgZ1 = parseFloat((avgZ1 / cluster1.length).toFixed(1));

    for (var i = 0; i < cluster2.length; i++) {

        var avgX2 = avgX2 + dataset[cluster2[i]].x;
        var avgY2 = avgY2 + dataset[cluster2[i]].y;
        var avgZ2 = avgZ2 + dataset[cluster2[i]].z;
    }

    var avgX2 = parseFloat((avgX2 / cluster2.length).toFixed(1));
    var avgY2 = parseFloat((avgY2 / cluster2.length).toFixed(1));
    var avgZ2 = parseFloat((avgZ2 / cluster2.length).toFixed(1));

    for (var i = 0; i < cluster3.length; i++) {

        var avgX3 = avgX3 + dataset[cluster3[i]].x;
        var avgY3 = avgY3 + dataset[cluster3[i]].y;
        var avgZ3 = avgZ3 + dataset[cluster3[i]].z;
    }

    var avgX3 = parseFloat((avgX3 / cluster3.length).toFixed(1));
    var avgY3 = parseFloat((avgY3 / cluster3.length).toFixed(1));
    var avgZ3 = parseFloat((avgZ3 / cluster3.length).toFixed(1));


    /*console.log("X:" + avgX1 + "Y:" + avgY1 + "Z:" + avgZ1)
    console.log("X:" + avgX2 + "Y:" + avgY2 + "Z:" + avgZ2)
    console.log("X:" + avgX3 + "Y:" + avgY3 + "Z:" + avgZ3)

    //console.log("--------------")*/

    x1 = avgX1;
    x2 = avgX2;
    x3 = avgX3;

    y1 = avgY1;
    y2 = avgY2;
    y3 = avgY3;


    z1 = avgZ1;
    z2 = avgZ2;
    z3 = avgZ3;

    cluster1 = [];
    cluster2 = [];
    cluster3 = [];



}



inital(7, 2, 10);
AverageCentroid();
//console.log("--------------")


iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)

console.log("--------iteration 2------")
//console.log(cluster1)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")


iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")


iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
AverageCentroid();
//console.log("--------------")

iteration(x1, y1, z1, x2, y2, z2, x3, y3, z3);
console.log(x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + x3 + " " + y3 + " " + z3)
//console.log(cluster1)

AverageCentroid();
//console.log("--------------")




