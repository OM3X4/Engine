import subprocess
import chess
import chess.engine
import time

# stockFishPath = r"C:\Users\said5\Desktop\stockfish-windows-x86-64-sse41-popcnt\stockfish\stockfish-windows-x86-64-sse41-popcnt.exe"
games = []
board = chess.Board()
# engine = chess.engine.SimpleEngine.popen_uci(stockFishPath)
# engine.configure({"Skill Level": 2})

# Initialize total time counters
white_total_time = 0
black_total_time = 0

start = time.time()

while not board.is_game_over():
    try:
        # --- White (Your Engine's) Move ---
        white_move_start = time.time()  # Start timing for white move

        current_fen = board.fen()
        move_san = subprocess.run(["node", "EngineKO6.js", current_fen], capture_output=True, text=True).stdout.strip()
        
        try:
            move = board.parse_uci(move_san)
            if not board.is_legal(move):
                print(f"Invalid move by your engine: {move_san}. Please check your engine logic.")
                break
            board.push(move)
            print(f"Engine move: {move_san}")
        except ValueError as e:
            print(f"Invalid SAN format or move by your engine: {move_san}. Error: {e}")
            break
        
        white_move_end = time.time()  # End timing for white move
        white_total_time += (white_move_end - white_move_start)  # Accumulate time for white
        
        # --- Black (Opponent Engine's) Move ---
        black_move_start = time.time()  # Start timing for black move
        
        current_fen = board.fen()
        move = subprocess.run(["node", "EngineKO5.js", current_fen], capture_output=True, text=True).stdout.strip()
        
        try:
            move = board.parse_uci(move)
            if not board.is_legal(move):
                print(f"Invalid move by your engine: {move}. Please check your engine logic.")
                break
            board.push(move)
            print(f"EngineOG move: {move}")
        except ValueError as e:
            print(f"Invalid SAN format or move by your engine: {move}. Error: {e}")
            break
        
        black_move_end = time.time()  # End timing for black move
        black_total_time += (black_move_end - black_move_start)  # Accumulate time for black
        
        

        # Check if the game is over
        if board.is_game_over():
            print("game", board.result())
            games.append(board.result())
    except:
        games.append("error")
    
    print(board.fen())

end = time.time()

elapsedTime = end - start

print(board.fen())
print(board)
print(f"Elapsed Time : {elapsedTime} seconds")
print(f"Total Time taken by White: {white_total_time} seconds")
print(f"Total Time taken by Black: {black_total_time} seconds")
