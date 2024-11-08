from textwrap import dedent

class MenuNavigation:
    def main(self):
        print(dedent("""
        ------------------------------------------------------------------------------------------------------------

        .______        ___   .___________.___________. __       _______     _______. __    __   __  .______   
        |   _  \      /   \  |           |           ||  |     |   ____|   /       ||  |  |  | |  | |   _  \  
        |  |_)  |    /  ^  \ `---|  |----`---|  |----`|  |     |  |__     |   (----`|  |__|  | |  | |  |_)  | 
        |   _  <    /  /_\  \    |  |        |  |     |  |     |   __|     \   \    |   __   | |  | |   ___/  
        |  |_)  |  /  _____  \   |  |        |  |     |  `----.|  |____.----)   |   |  |  |  | |  | |  |      
        |______/  /__/     \__\  |__|        |__|     |_______||_______|_______/    |__|  |__| |__| | _|       

        ------------------------------------------------------------------------------------------------------------                                                                                                                                                                                                                  
        """))
        print("Welcome to BATTLESHIP!")
        print("Please enter the correct number for the corresponding action.")
        print("""
        1. View rules

        2. Play against AI.

        3. Play with a friend.
        """)


    def rules(self):
        print()
        print(dedent("""
                                                      RULES
        -------------------------------------------------------------------------------------------------------
       
        1. Objective: The goal of Battleship is to sink all of your opponent's ships before they sink yours.
        
        2. Each player places a set number of ships on their grid without showing their opponent. Ships vary 
           in size and occupy a set number of consecutive spaces either horizontally or vertically.

        3. Players take turns guessing coordinates on the opponent's grid to find and sink their ships. 
           Each turn, a player announces a target coordinate (e.g., "B4").

        4. If the target coordinate is occupied by an opponent's ship, it's a "hit." Otherwise, it’s a "miss." 
           Mark hits and misses on your own grid for reference.

        5. When all cells of a particular ship are hit, that ship is considered "sunk."

        6. The first player to sink all of their opponent's ships wins.

        -------------------------------------------------------------------------------------------------------
        """))
        
    def game_mode(self):
        while True:
            try:
                userInput = int(input(dedent("""
                SELECT GAME MODE
                ----------------

                1.) Standard 
                    (Regular battleship rules on a 10x10 grid)

                2.) Standoff (NOT PLAYABLE)
                    (Both players each with a one-cell ship on a 3x3 grid.)

                User: 
                """)))
                if userInput in [1, 2]:
                    return userInput
                else:
                    print("Invalid choice, please choose 1 or 2.")
            except ValueError:
                print("Invalid input! Please enter a number.")
        
    def play_with_friends_instructions(self, username):
        print(dedent(f"""
        {username}, please enter the coordinates range of the corresponding size cell ships.
        """))


class Player:
    def __init__(self, name, board_orientation=None):
        if board_orientation is None:
            board_orientation = [['_' for _ in range(10)] for _ in range(10)]
        self.name = name[0].upper() + name[1:]
        self.board_orientation = board_orientation
        self.guess_board = [['_' for _ in range(10)] for _ in range(10)]

    def display_board(self):
        print(f"{self.name}'s Board:")

        # Column headers (1-10)
        print("   " + " ".join(str(num) for num in range(1, 11)))
        
        # Row headers (A-J) and board content
        row_labels = "ABCDEFGHIJ"
        for i, row in enumerate(self.board_orientation):
            print(row_labels[i] + "  " + " ".join(str(cell) for cell in row))

    def display_guess_board(self):
        print(f"{self.name}'s Guess Board:")
        print("   " + " ".join(str(num) for num in range(1, 11)))
        row_labels = "ABCDEFGHIJ"
        for i, row in enumerate(self.guess_board):
            print(row_labels[i] + "  " + " ".join(str(cell) for cell in row))

    def set_ships(self):
        self.display_board()
        ships = {"Carrier": 5, "Battleship": 4, "Cruiser": 3, "Submarine": 3, "Destroyer": 2}
        ships_placed = 0
        row_labels = "ABCDEFGHIJ"

        while ships_placed < len(ships):
            print(f"\nPlacing {list(ships.keys())[ships_placed]} (Size: {ships[list(ships.keys())[ships_placed]]})")

            # Prompt for ship placement input
            row_input = input("Enter row (A-J): ").upper()
            if row_input in row_labels:
                x = row_labels.index(row_input)
            else:
                print("Invalid row input. Please enter a letter from A-J.")
                continue

            y = int(input("Enter column (1-10): ")) - 1
            if y < 0 or y >= 10:
                print("Invalid column input. Please enter a number from 1-10.")
                continue

            direction = input("Enter direction (H for horizontal, V for vertical): ").upper()
            ship_size = ships[list(ships.keys())[ships_placed]]

            if direction == 'H' and y + ship_size <= 10:
                if all(self.board_orientation[x][y + i] == '_' for i in range(ship_size)):
                    for i in range(ship_size):
                        self.board_orientation[x][y + i] = 'S'
                    ships_placed += 1
                    print("\nShip placed successfully!")
                else:
                    print("Invalid position: Overlapping with another ship.")
            elif direction == 'V' and x + ship_size <= 10:
                if all(self.board_orientation[x + i][y] == '_' for i in range(ship_size)):
                    for i in range(ship_size):
                        self.board_orientation[x + i][y] = 'S'
                    ships_placed += 1
                    print("\nShip placed successfully!")
                else:
                    print("Invalid position: Overlapping with another ship.")
            else:
                print("Invalid position: Ship doesn't fit on the board. Try again.")
            self.display_board()
        print("\nAll ships have been placed!")


class GameLogic:
    def __init__(self, play_with_friend, game_mode, player1, player2):
        self.play_with_friend = play_with_friend
        self.game_mode = game_mode
        self.player1 = player1
        self.player2 = player2

    def turn(self, current_player, opponent):
        row_labels = "ABCDEFGHIJ"
        while True:
            try:
                row_input = input(f"{current_player.name}, enter row (A-J): ").upper()
                x = row_labels.index(row_input)
                y = int(input(f"{current_player.name}, enter column (1-10): ")) - 1
                if opponent.board_orientation[x][y] == 'S':
                    print("Hit!")
                    opponent.board_orientation[x][y] = '*'
                    current_player.guess_board[x][y] = '*'
                else:
                    print("Miss!")
                    current_player.guess_board[x][y] = 'X'
                break
            except (ValueError, IndexError):
                print("Invalid input. Try again.")

    def check_winner(self, opponent):
        return all(cell != 'S' for row in opponent.board_orientation for cell in row)

    def play_game(self):
        current_player, opponent = self.player1, self.player2
        while True:
            self.turn(current_player, opponent)
            current_player.display_guess_board()
            if self.check_winner(opponent):
                print(f"{current_player.name} wins!")
                break
            current_player, opponent = opponent, current_player


menu = MenuNavigation()
menu.main()
userInput = int(input("User: "))
if userInput == 3:
    game_mode = menu.game_mode()
    play_with_friend = True

    player1_username = input("Enter username for player1: ")
    player1 = Player(player1_username)
    menu.play_with_friends_instructions(player1.name)
    player1.set_ships()

    player2_username = input("Enter username for player2: ")
    player2 = Player(player2_username)
    print(f"{player2.name}'s Turn to set ships")
    player2.set_ships()

    game = GameLogic(play_with_friend, game_mode, player1, player2)
    game.play_game()
