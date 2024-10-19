import subprocess
import chess
import chess.engine
import time

stockFishPath = r"C:\Users\said5\Desktop\stockfish-windows-x86-64-sse41-popcnt\stockfish\stockfish-windows-x86-64-sse41-popcnt.exe"
# 1 mean my engine won -1 stockfish won 0 draw
games = []
board = chess.Board()
engine = chess.engine.SimpleEngine.popen_uci(stockFishPath)
engine.configure({"Skill Level": 3})
# Run the JavaScript file using Node.js

start = time.time()
# for i in range(500):
while not board.is_game_over():
    try:
        # print(board)

        # Get the FEN of the current board
        current_fen = board.fen()

        # Get move from your engine in SAN format
        move_san = subprocess.run(["node", "src/comps/EngineKO3.js", current_fen], capture_output=True, text=True).stdout.strip()

        # Check if the move is valid
        try:
            # Convert SAN move to Move object
            move = board.parse_uci(move_san)

            # Check if the move is legal
            if not board.is_legal(move):
                print(f"Invalid move by your engine: {move_san}. Please check your engine logic.")
                break
            
            # Update the board with your engine's move
            board.push(move)
            print(f"Engine move: {move_san}")

        except ValueError as e:
            print(f"Invalid SAN format or move by your engine: {move_san}. Error: {e}")
            break

        # Get Stockfish's best move
        if(not board.is_checkmate()):
            result = engine.play(board, chess.engine.Limit(time=0.1))
            board.push(result.move)
            print(f"Stockfish move: {result.move}")
        

        # Check if the game is over
        if board.is_game_over():
            print("game" , board.result())
            games.append(board.result())
    except:
            games.append("error")
            
    print(board.fen())

end = time.time()

elapsedTime = end - start

print(board.fen())
print(f"Elapsed Time : {elapsedTime} seconds")