/* eslint-disable */
import { Position } from "kokopu"
const squareNames = [
    'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8',
    'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8',
    'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8',
    'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8',
    'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8',
    'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8',
    'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8'
]

const SquareValueTable = {
    "n": {
        a1: -0.25, b1: -0.2, c1: -0.15, d1: -0.15, e1: -0.15, f1: -0.15, g1: -0.2, h1: -0.25,
        a2: -0.2, b2: -0.1, c2:  0.0, d2:  0.0, e2:  0.0, f2:  0.0, g2: -0.1, h2: -0.2,
        a3: -0.15, b3:  0.0, c3:  0.05, d3:  0.075, e3:  0.075, f3:  0.05, g3:  0.0, h3: -0.15,
        a4: -0.15, b4:  0.025, c4:  0.075, d4:  0.1, e4:  0.1, f4:  0.075, g4:  0.025, h4: -0.15,
        a5: -0.15, b5:  0.0, c5:  0.075, d5:  0.1, e5:  0.1, f5:  0.075, g5:  0.0, h5: -0.15,
        a6: -0.15, b6:  0.025, c6:  0.05, d6:  0.075, e6:  0.075, f6:  0.05, g6:  0.025, h6: -0.15,
        a7: -0.2, b7: -0.1, c7:  0.0, d7:  0.025, e7:  0.025, f7:  0.0, g7: -0.1, h7: -0.2,
        a8: -0.25, b8: -0.2, c8: -0.15, d8: -0.15, e8: -0.15, f8: -0.15, g8: -0.2, h8: -0.25
    },
    "b": {
        a1: -0.1, b1: -0.05, c1: -0.05, d1: -0.05, e1: -0.05, f1: -0.05, g1: -0.05, h1: -0.1,
        a2: -0.05, b2:  0.0, c2:  0.0, d2:  0.0, e2:  0.0, f2:  0.0, g2:  0.0, h2: -0.05,
        a3: -0.05, b3:  0.0, c3:  0.05, d3:  0.075, e3:  0.075, f3:  0.05, g3:  0.0, h3: -0.05,
        a4: -0.05, b4:  0.0, c4:  0.075, d4:  0.1, e4:  0.1, f4:  0.075, g4:  0.0, h4: -0.05,
        a5: -0.05, b5:  0.0, c5:  0.075, d5:  0.1, e5:  0.1, f5:  0.075, g5:  0.0, h5: -0.05,
        a6: -0.05, b6:  0.0, c6:  0.05, d6:  0.075, e6:  0.075, f6:  0.05, g6:  0.0, h6: -0.05,
        a7: -0.05, b7:  0.0, c7:  0.0, d7:  0.0, e7:  0.0, f7:  0.0, g7:  0.0, h7: -0.05,
        a8: -0.1, b8: -0.05, c8: -0.05, d8: -0.05, e8: -0.05, f8: -0.05, g8: -0.05, h8: -0.1
    },
    "r": {
        a1: 0.0, b1: 0.0, c1: 0.0, d1: 0.0, e1: 0.0, f1: 0.0, g1: 0.0, h1: 0.0,
        a2: 0.025, b2: 0.025, c2: 0.025, d2: 0.025, e2: 0.025, f2: 0.025, g2: 0.025, h2: 0.025,
        a3: 0.05, b3: 0.05, c3: 0.05, d3: 0.05, e3: 0.05, f3: 0.05, g3: 0.05, h3: 0.05,
        a4: 0.075, b4: 0.075, c4: 0.075, d4: 0.075, e4: 0.075, f4: 0.075, g4: 0.075, h4: 0.075,
        a5: 0.1, b5: 0.1, c5: 0.1, d5: 0.1, e5: 0.1, f5: 0.1, g5: 0.1, h5: 0.1,
        a6: 0.05, b6: 0.05, c6: 0.05, d6: 0.05, e6: 0.05, f6: 0.05, g6: 0.05, h6: 0.05,
        a7: 0.025, b7: 0.025, c7: 0.025, d7: 0.025, e7: 0.025, f7: 0.025, g7: 0.025, h7: 0.025,
        a8: 0.0, b8: 0.0, c8: 0.0, d8: 0.0, e8: 0.0, f8: 0.0, g8: 0.0, h8: 0.0
    },
};


const oppositionMap = new Map([
    ["h1", "g3"],
    ["h8", "g6"],
    ["a1", "b3"],
    ["a8", "b6"]
]);


const TT = new Map()

const openingBook = {
    // Starting position
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1": [
        "e2e4", "d2d4", "c2c4", "g1f3", "b2b3",  "b1c3", 
        "c2c3"
    ],

    // 1. e4 responses
    "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1": [
        "e7e5", "c7c5", "c7c6", "d7d6", "d7d5", "g8f6", 
        "b8c6"
    ],

    // 1. e4 e5
    "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1": [
        "g1f3", "b1c3", "f1c4", "f2f4", "d2d4", "b2b3", "c2c3", "g2g3", "f1e2", "d2d3",
        "a2a3", "a2a4", "h2h3", "b2b4", "g2g4", "h2h4", "f1d3", "c2c4"
    ],

    // 1. e4 e5 2. Nf3
    "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 0 1": [
        "b8c6", "g8f6", "d7d6", "f7f5", "b7b6", "g7g6", "f8c5", "f8e7", "c7c6", "a7a6",
        "h7h6", "b7b5", "g7g5", "d7d5", "c7c5", "a7a5", "h7h5", "f8d6"
    ],

    // Sicilian variations (1. e4 c5)
    "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1": [
        "g1f3", "b1c3", "c2c3", "d2d4", "f2f4", "b2b4", "c2c4", "g2g3", "b2b3", "f1c4",
        "d2d3", "a2a3", "h2h3", "g1e2", "f1e2", "b1a3", "g2g4", "h2h4"
    ],
    // Sicillian Defense e4 c5 d4 => xd4
    "rnbqkbnr/pp1ppppp/8/2p5/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 1": [
        "c5d4"
    ],

    // French Defense variations (1. e4 e6)
    "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1": [
        "d2d4", "d2d3", "b1c3", "g1f3", "f2f4", "c2c4", "b2b3", "g2g3", "c2c3", "f1e2"
    ],

    // Caro-Kann variations (1. e4 c6)
    "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1": [
        "d2d4", "b1c3", "f2f3", "g1f3", "c2c4", "d2d3", "f1d3", "f1e2", "b2b3", "g2g3"
    ],
    //Caro-Kann Defence e4 c6 d4 => d5
    "rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 1": [
        "d7d5"
    ],

    // 1. d4 variations
    "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1": [
        "d7d5"
    ],

    // King's Indian Defense variations
    "rnbqkb1r/pppppp1p/5np1/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1": [
        "c2c4", "g1f3", "b1c3", "e2e4", "f2f3", "g2g3", "f1g2", "e2e3", "h2h3", "b2b3"
    ],

    // Hundreds more major opening variations...

    // Unusual openings
    "rnbqkbnr/pppppppp/8/8/8/2N5/PPPPPPPP/R1BQKBNR b KQkq - 0 1": [
        "e7e5", "d7d5", "c7c5", "g8f6", "e7e6", "g7g6", "b7b6", "a7a6", "h7h6", "f7f5"
    ],
    
    "rnbqkbnr/pppppppp/8/8/8/7N/PPPPPPPP/RNBQKB1R b KQkq - 0 1": [
        "e7e5", "d7d5", "c7c5", "g8f6", "e7e6", "g7g6", "b7b6", "a7a6", "h7h6", "f7f5"
    ],

    // Deep variations
    // Ruy Lopez, Berlin Defense
    "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1": [
        "d2d3", "b1c3", "d2d4", "c2c3", "a2a4", "b5a4", "b5c6", "h2h3", "g2g3"
    ],

    // Sicilian Najdorf
    "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 1": [
        "f1e2", "f1e3", "f1d3", "g2g4", "h2h3", "f2f3", "c1e3", "b2b3", "a2a4", "d1e2"
    ],

    // Ultra-deep variations...
    "r1bq1rk1/2p1bppp/p1n2n2/1p1pp3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 0 1": [
        "h2h3", "a2a4", "d2d3", "d2d4", "b3a2", "e4d5", "e4f5", "c3a4", "c1a3", "f3h4"
    ],

    // Thousands more positions...
    "r1bqkb1r/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 0 1": [
        "a7a6", "g8f6", "d7d6", "f8c5", "f7f6"
    ],
    "r1bqk2r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 0 1": [
        "f8e7", "f8c5", "a7a6", "d7d6", "b7b5"
    ],
    
    // Sicilian Defense variations
    "rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 1": [
        "c5d4", "g7g6", "b8c6", "e7e6", "g8f6"
    ],
    "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 1": [
        "b1c3", "f1e2", "f1e3", "c2c4", "f2f3"
    ],
    
    // French Defense variations
    "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 1": [
        "d5e4", "g8f6", "c7c5", "b8c6", "f8b4"
    ],
    "rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 1": [
        "d5e4", "f8b4", "c7c5", "b7b6", "c7c6"
    ],
    
    // Caro-Kann variations
    "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 1": [
        "d5e4", "c6d5", "g8f6", "c8f5", "e7e6"
    ],
    "rn1qkbnr/pp2pppp/2p5/5b2/3PN3/8/PPP2PPP/R1BQKBNR b KQkq - 0 1": [
        "e7e6", "g8f6", "b8d7", "e7e5", "f5g6"
    ],
    
    // Pirc Defense variations
    "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 1": [
        "b1c3", "f2f4", "g1f3", "f1e3", "c2c4"
    ],
    "rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 1": [
        "f2f4", "g1f3", "f1e3", "f1e2", "h2h3"
    ],
    
    // King's Indian Defense variations
    "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R b KQ - 0 1": [
        "e7e5", "c7c6", "a7a6", "b7b6", "b8a6"
    ],
    "rnbq1rk1/pp2ppbp/2pp1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQ - 0 1": [
        "f1e2", "h2h3", "f1e3", "c1e3", "d1c2"
    ],
    
    // Grünfeld Defense variations
    "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 1": [
        "c4d5", "g1f3", "c1g5", "e2e3", "d1b3"
    ],
    "rnbqkb1r/ppp1pp1p/5np1/3P4/3P4/2N5/PP2PPPP/R1BQKBNR b KQkq - 0 1": [
        "g6d5", "f8g7", "e7e6", "c7c6", "d8a5"
    ],
    
    // Queen's Gambit variations
    "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 1": [
        "g1f3", "c4d5", "c1g5", "e2e3", "c4c5"
    ],
    "rnbqkb1r/pp3ppp/4pn2/2pp4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 1": [
        "e2e3", "c4d5", "c4c5", "g2g3", "d4c5"
    ],
    
    // Benoni Defense variations
    "rnbqkb1r/pp1p1ppp/4pn2/2pP4/2P5/8/PP2PPPP/RNBQKBNR w KQkq - 0 1": [
        "b1c3", "e2e4", "g1f3", "d2d6", "g2g3"
    ],
    "rnbqkb1r/pp1p1ppp/4pn2/2pP4/4P3/2N5/PP3PPP/R1BQKBNR b KQkq - 0 1": [
        "e6d5", "g7g6", "d7d6", "b7b5", "h7h6"
    ],
    
    // Dutch Defense variations
    "rnbqkb1r/ppppp1pp/5n2/5p2/3P4/6P1/PPP1PP1P/RNBQKBNR b KQkq - 0 1": [
        "g7g6", "e7e6", "d7d6", "c7c6", "b7b6"
    ],
    "rnbqkb1r/ppppp1pp/5n2/5p2/3P4/2N3P1/PPP1PP1P/R1BQKBNR b KQkq - 0 1": [
        "g7g6", "e7e6", "d7d6", "c7c6", "b7b6"
    ],
    
    // English Opening variations
    "rnbqkb1r/pppp1ppp/4pn2/8/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq - 0 1": [
        "g2g3", "e2e4", "g1f3", "d2d4", "e2e3"
    ],
    "r1bqkb1r/pppp1ppp/2n1pn2/8/2P5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq - 0 1": [
        "f1g2", "g1f3", "e2e3", "e2e4", "d2d4"
    ],
    
    // Nimzo-Indian Defense variations
    "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 1": [
        "e2e3", "g1f3", "c1d2", "d1c2", "a2a3"
    ],
    "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 0 1": [
        "o-o", "c7c5", "d7d5", "b7b6", "b4c3"
    ],
    
    // ... many more positions following similar patterns
    
    // Example of a rare/unusual position
    "rnbqkb1r/pp1ppppp/8/2p5/4P1n1/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1": [
        "h2h3", "d2d4", "b1c3", "e4e5", "f3e5"
    ],
    
    // Example of a highly tactical position
    "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R b KQkq - 0 1": [
        "c5b4", "o-o", "d7d6", "b8d4", "c5e7"
    ]
};

const book = new Map(Object.entries(openingBook))


function getOpeningMove(fen){
    if(book.has(fen)){
        const moves = book.get(fen);
        const len = moves.length
        const index = Math.floor(Math.random() * len)
        return [moves[index].slice(0 ,2) ,moves[index].slice(2 ,4) ]
    }else return 0
}

function searchSorting(fen , isWhite = true){
    let chess = new Position(fen);
    let steps = { count:0 }
    let skips = { count:0 }
    let moves = BasicSorting(chess);
    let scoreCounter = new Map()
    
    
    for(const move of moves){
        chess.play(move)
        let score = minimax(chess.fen() , 0 , false , steps , -Infinity , Infinity , skips , isWhite , 0 , 3)
        scoreCounter.set(move , score)
        chess = new Position(fen)
    }
    
    moves.sort((a , b) => scoreCounter.get(b) - scoreCounter.get(a))
    
    if(moves.length > 3){
        
        return moves.slice(0 , 3)
    }else {
        return moves
    }
    
}

function BasicSorting(chess){
    let moves  = chess.moves()
    moves.sort((a, b) => {
        return (b.isCapture() === a.isCapture()) ? 0 : b.isCapture() ? 1 : -1;
    });
    moves = moves.filter((move) => {
        if(move.isPromotion()){
            if(move.promotion() != "q"){
                return false
            }
        }
        return true
    })
    return moves
}

function forceKingToCornerEndgameEval(friendlyKingSquare, opponentKingSquare , rooks) {
    let evaluation = 0;

    // Extract ranks (rows) and files (columns) for both kings
    const friendlyKingRank = parseInt(friendlyKingSquare[1]);
    const friendlyKingFile = friendlyKingSquare.charCodeAt(0) - 96;
    const opponentKingRank = parseInt(opponentKingSquare[1]);
    const opponentKingFile = opponentKingSquare.charCodeAt(0) - 96;
    
    if(opponentKingFile == 0 || opponentKingFile == 7 || opponentKingRank == 1 || opponentKingRank == 8){
        // evaluation += 1000
    }

    // Calculate distances to the center of the board (e4/d4/e5/d5)
    const opponentKingDstToCentreFile = Math.max(3 - Math.abs(opponentKingFile - 4), 0);
    const opponentKingDstToCentreRank = Math.max(3 - Math.abs(opponentKingRank - 4), 0);
    const opponentKingDstFromCentre = opponentKingDstToCentreFile + opponentKingDstToCentreRank;

    // Favor positions where opponent king is far from the center
    evaluation += opponentKingDstFromCentre;

    // Incentivize moving friendly king closer to the opponent's king to help cut off escape routes
    const dstBetweenKingsFile = Math.abs(friendlyKingFile - opponentKingFile);
    const dstBetweenKingsRank = Math.abs(friendlyKingRank - opponentKingRank);
    const dstBetweenKings = dstBetweenKingsFile + dstBetweenKingsRank;

    evaluation += 14 - dstBetweenKings;

    //bonus for taking opposition and attack with the rook and bonus for opposition
    if(rooks.length > 0){
        if(dstBetweenKingsFile == 2 && dstBetweenKingsRank == 0){
            evaluation += 5
            for(const rook of rooks){
                let rookFile = rook.charCodeAt(0) - 96;
                if(opponentKingFile == rookFile){
                    evaluation += 20;
                }
            }
        }
        else if(dstBetweenKingsRank == 2 && dstBetweenKingsFile == 0){

            evaluation += 5
            for(const rook of rooks){
                let rookRank = parseInt(rook[1]);

                if(opponentKingRank == rookRank){
                    evaluation += 20;
                }
            }
        }
    }


    // Return the evaluation, multiplying by the endgame weight
    return evaluation / 5;
}

function evaluateEndgame(ourKing, enemyKing, numberOfPieces , ourRooks) {
    let evaluation = 0;
    let fileOP = false;
    let rankOP = false;
    // Convert king positions to numerical values
    const enemyKingFile = enemyKing[0].charCodeAt() - 96;  // a=1, b=2, etc.
    const enemyKingRank = parseInt(enemyKing[1]);
    const ourKingFile = ourKing[0].charCodeAt() - 96;
    const ourKingRank = parseInt(ourKing[1]);
        
    if (numberOfPieces <= 4) {  // We're in a basic endgame
        // 1. Push enemy king to the edge
        // Check file distance to nearest edge
        const enemyFileEdgeDistance = Math.min(enemyKingFile - 1, 8 - enemyKingFile);
        // Check rank distance to nearest edge
        const enemyRankEdgeDistance = Math.min(enemyKingRank - 1, 8 - enemyKingRank);
            
        // The closer to the edge, the higher the bonus (max 70 points)
        evaluation += (7 - enemyFileEdgeDistance) * 5;
        evaluation += (7 - enemyRankEdgeDistance) * 5;
            
        // 2. Keep our king close to enemy king
        const fileDistance = Math.abs(ourKingFile - enemyKingFile);
        const rankDistance = Math.abs(ourKingRank - enemyKingRank);
        const totalDistance = fileDistance + rankDistance;
            
        // Reward closer distance between kings (max 140 points)
        evaluation += (14 - totalDistance) * 10;
            
        // 3. Big bonus if we've forced the enemy king to an edge
        if (enemyKingFile === 1 || enemyKingFile === 8 || 
            enemyKingRank === 1 || enemyKingRank === 8) {
            evaluation += 100;
            }
            
            // 4. Even bigger bonus if enemy king is in a corner
        if ((enemyKingFile === 1 || enemyKingFile === 8) && 
            (enemyKingRank === 1 || enemyKingRank === 8)) {
            evaluation += 200;
        }
            
            // 5. Bonus for kings being in opposition
        if (Math.abs(ourKingFile - enemyKingFile) === 2 && 
            ourKingRank === enemyKingRank) {
            fileOP = true;
            evaluation += 100;  // Horizontal opposition
        }
        if (Math.abs(ourKingRank - enemyKingRank) === 2 && 
            ourKingFile === enemyKingFile) {
            rankOP = true;
            evaluation += 100;  // Vertical opposition
        }
            //penalty if double ROOKS
        if(ourRooks.length == 2){
            if(ourRooks[0][0] == ourRooks[1][0]){
                evaluation -= 50;
            }else if(ourRooks[0][1] == ourRooks[1][1]){
                evaluation -= 50;
            }
        }
    
            //penalty for rooks being near the king
        if(ourRooks.length > 0){
            for(const rook of ourRooks){
    
                const rookFile = rook[0].charCodeAt() - 96;
                const rookRank = parseInt(rook[1])
    
                const fileDistance = Math.abs(rookFile - enemyKingFile);
                const rankDistance = Math.abs(rookRank - enemyKingRank);
                const totalDistance = fileDistance + rankDistance;
                evaluation += totalDistance * 50
                if(rankOP && rookRank == enemyKingRank){
                    evaluation += 1000;
                }else if(fileOP && rookFile == enemyKingFile){
                    evaluation += 1000;
                }
            }
    
        }
    
        //reward for taking opposition when enemyking is in the corner
    
    
    
    }
        
    return evaluation / 100;  // Scale down the evaluation
}

function material(square , chess){
    const piece = chess.square(square);
    const values = {
        p : 1,
        b : 3,
        n : 3,
        r : 5,
        q : 9,
        k : 0,
    }
    if(piece != '-'){
        if(piece[0] == "w"){
            if(["n" ,"b" , "r"].includes(piece[1])){
                return values[piece[1]] + SquareValueTable[piece[1]][square]
            }
            return values[piece[1]];
        }else{
            if(["n" ,"b" , "r"].includes(piece[1])){
                return -(values[piece[1]] + SquareValueTable[piece[1]][square])
            }
            return -values[piece[1]];
        }
    }
    return 0;
}

function pawnEval(square , chess){
    let score = 0;
    let rank = parseInt(square[1])
    let piece = chess.square(square);
    if(piece){
        if (piece[1] === 'p') {
            return piece[0] === "w" 
                ? score += -0.12 + (0.1 * rank) 
                : score += 0.12 - (0.1 * (7 - rank));
        }
    }
    return 0;
}

function conquer(square , chess){
    const squares = {
        // Central squares (higher importance)
        
        // Adjacent squares to the center
        c6: 0.2, d6: 0.2, e6: 0.2, f6: 0.2,
        c3: 0.2, d3: 0.2, e3: 0.2, f3: 0.2,
        c5: 0.2, d5: 0.3, e5: 0.3, f5: 0.2,
        c4: 0.2, d4: 0.3, e4: 0.3, f4: 0.2,
        
        // Outer center squares (less importance)
        b6: 0.1, g6: 0.1,
        b3: 0.1, g3: 0.1,
        b5: 0.1, g5: 0.1,
        b4: 0.1, g4: 0.1,
        
        // All remaining squares (lowest importance)
        a1: 0.05, b1: 0.05, c1: 0.05, d1: 0.05, e1: 0.05, f1: 0.05, g1: 0.05, h1: 0.05,
        a2: 0.05, b2: 0.05, c2: 0.05, d2: 0.05, e2: 0.05, f2: 0.05, g2: 0.05, h2: 0.05,
        a3: 0.05,                                                                 h3: 0.05,
        a4: 0.05,                                                                 h4: 0.05,
        a5: 0.05,                                                                 h5: 0.05,
        a6: 0.05,                                                                 h6: 0.05,
        a7: 0.05, b7: 0.05, c7: 0.05, d7: 0.05, e7: 0.05, f7: 0.05, g7: 0.05, h7: 0.05,
        a8: 0.05, b8: 0.05, c8: 0.05, d8: 0.05, e8: 0.05, f8: 0.05, g8: 0.05, h8: 0.05
    };

    let score = 0;
    if(chess.isAttacked(square , "w")){
        score += squares[square] * 0.5;
    }else if(chess.isAttacked(square , "b")){
        score -= squares[square] * 0.5;
    }
    return score;
}

function development(square , chess){
    const minor = ["n" , "b" , "q"]
    if(minor.includes(chess.square(square)[1])){
        if(square[1] == 1 && chess.square(square)[0] == "w"){
            return -0.3
        }else if(square[1] == 8 && chess.square(square)[0] == "b"){
            return 0.3
        }
        return 0;
    }
    return 0;
}

function evaluate(fen , isWhite , depth){
    let score = 0;
    const chess = new Position(fen);
    let numberOfPieces = 0;
    let enemyKing = null;
    let ourKing = null;
    let ourRooks = []
    const ourKingColor = isWhite ? "b" : "w"
    if(chess.isCheckmate()){
        if(chess.turn() == "w" && isWhite){
            return 1000 - depth
        }else{
            return -1000 + depth
        }
    }else if(chess.isStalemate() || chess.isDead()){
        return 0;
    }
    for(let i = 0; i < squareNames.length; i++){
        if(chess.square(squareNames[i]) != '-'){
            numberOfPieces++;
            if(chess.square(squareNames[i])[1] == "k"){
                if(chess.square(squareNames[i])[0] == ourKingColor){
                    ourKing = squareNames[i]
                }else{
                    enemyKing = squareNames[i]
                }
            }else if(chess.square(squareNames[i])[1] == "r"){
                if(chess.square(squareNames[i])[0] == ourKingColor){
                    ourRooks = [ ...ourRooks , squareNames[i]]
                }
            }
        }
        score += material(squareNames[i] , chess);
        score += pawnEval(squareNames[i] , chess);
        score += conquer(squareNames[i] , chess);
        score += development(squareNames[i] , chess);
    }
    score = isWhite ? -score : score;
    if(["c1" , "g1" , "c8" , "g8"].includes(ourKing) && numberOfPieces > 24){
        score += 0.5
    }
    if(numberOfPieces <= 5){
        score += evaluateEndgame(ourKing , enemyKing , numberOfPieces , ourRooks)
        if(oppositionMap.has(enemyKing)){
            if(oppositionMap.get(enemyKing) == ourKing){
                score += 1;
            }
        }
        score += forceKingToCornerEndgameEval(ourKing , enemyKing , ourRooks)
    }
    return score;
}


function minimax(fen , depth , isMaximizing, steps , alpha , beta , skips , isWhite  , maxDepth){
    steps.count++;
    let base = new Position(fen)
    if(base.isCheckmate() && !isMaximizing){
        return 1000 - depth;
    }else if(base.isCheckmate() && isMaximizing){
        return depth - 1000
    }else if(base.isDead() || base.isStalemate()){
        return 0;
    }else if(depth == maxDepth){
        return evaluate(fen , isWhite , depth);
    }

    if(TT.has(fen) && TT.get(fen)[1] == maxDepth && false){
        skips.count++;
        return TT.get(fen)[0];
    }else{
        const moves = BasicSorting(base);

        if(isMaximizing){
            let bestScore = -Infinity;
            for(const move of moves){
                let chess = new Position(fen)
                chess.play(move);
                let score = minimax(chess.fen() , depth + 1 , false , steps , alpha , beta , skips , isWhite  , maxDepth);
                bestScore = Math.max(bestScore, score);
                alpha = (alpha < score ? score : alpha);
                if(alpha >= beta){
                    break;
                }
            }
            TT.set(fen , [bestScore , maxDepth])
            return bestScore;
        }else{
            let bestScore = Infinity;
            for(const move of moves){
                let chess = new Position(fen)
                chess.play(move)
                let score = minimax(chess.fen() , depth + 1 , true , steps , alpha , beta , skips , isWhite  , maxDepth);
                bestScore = Math.min(bestScore, score);
                beta = (beta < score ? beta : score);
                if(alpha >= beta){
                    break;
                }
            }
            TT.set(fen , [bestScore , maxDepth])
            return bestScore;
    }}

}

export function engine(fen , isWhite = true){
    let chess = new Position(fen)
    let steps = { count: 0}
    let skips = { count: 0}
    let bestMove = null
    let bestScore = -Infinity
    let numberOfPieces = 0;
    for(const square of squareNames){
        if(chess.square(square) != '-'){
            numberOfPieces++;
        }
    }
    const maxdepth = 3
    let moves = BasicSorting(chess)
    const opening = getOpeningMove(fen);
    if(opening != 0){
        for(const move of moveOpening && false){
            if(move.from() == opening[0] && move.to() == opening[1]){
                // console.log("Theory")
                // return [move.from() , move.to() , false]
                return `${move.from()}${move.to()}`
            }
        }
    }
    // moves = searchSorting(fen , isWhite);



    for(const move of moves){
        chess.play(move);
        let ourRooks = []
        let ourKing = null;
        let enemyKing = null;
        const ourKingColor = isWhite ? "b" : "w"
        for(const square of squareNames){
            const piece = chess.square(square)
            if(piece[1] == "k"){
                if(piece[0] == ourKingColor){
                    ourKing = square
                }else{
                    enemyKing = square
                }
            }else if(piece[1] == "r"){
                if(piece[0] == ourKingColor){
                    ourRooks = [ ...ourRooks , square ]
                }
            }
        }
        let score = minimax(chess.fen() , 0 , false , steps , -Infinity , Infinity , skips , isWhite , maxdepth)
        if(numberOfPieces <= 4){
            score += forceKingToCornerEndgameEval(ourKing , enemyKing , ourRooks , fen);
        }
        if(score > bestScore){
            bestScore = score
            bestMove = move
        }
        chess = new Position(fen)
    }
    // console.log("score is " , bestScore)
    // console.log("bestMove : " , [bestMove.from() , bestMove.to()] , bestScore , "number of eval : " , steps.count , "number of skips : " , skips.count)
    // console.log("transposition table size after this move " , TT.size)
    // return [bestMove.from() , bestMove.to() , bestMove.isCastling()];
    return `${bestMove.from()}${bestMove.to()}`
}







const args = process.argv.slice(2); // Skip the first two default arguments
if (args.length >= 1) {
    const result = engine(args[0]);
    console.log(result); // Output the result to stdout
} else {
    console.log("Not enough arguments provided.");
}

// console.time("time")

// engine("r1bqkbnr/pppppppp/2n5/8/8/1P6/P1PPPPPP/RNBQKBNR w KQkq - 1 2" , false) // The hardest


// console.timeEnd("time")
// console.time("time")

// engine("r2q1rk1/ppp2ppp/2n2n2/2bpp3/2BPP3/2N2N2/PPP2PPP/R1BQ1RK1 w - - 0 1" , false) // 39 move


// console.timeEnd("time")

// console.time("time")

// engine("rnbqkbnr/8/8/8/8/8/8/RNBQKBNR w KQkq - 0 1" , false) // 50 move


// console.timeEnd("time")

// console.time("time")

// engine("1nbqkbn1/8/8/8/8/8/8/1NBQKBN1 w - - 0 1" , false) // 36 move


// console.timeEnd("time")
// console.time("time")

// engine("1nb1kbn1/8/8/8/8/8/8/1NB1KBN1 w - - 0 1" , false) // 24 move


// console.timeEnd("time")
// console.time("time")

// console.log(engine("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1" , false)) // 18 move


// console.timeEnd("time")
// console.time("time")

// console.log(sortedMoves4("8/8/1P2K3/8/2n5/1q6/8/5k2 b - - 0 1" , true , EmptyMap).map((item) => {
//     return { from:item.from() ,  to: item.to()}

// })) // 18 move


// console.timeEnd("time")




