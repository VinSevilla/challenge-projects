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

            2.) Standoff
                (Both players each with a one cell ship on a 3x3 grid.)

            User: 
            """)))
            if userInput in [1, 2]:
                return userInput
            else:
                print("Invalid choice, please choose 1 or 2.")
        except ValueError:
            print("Invalid input! Please enter a number.")
    
    def play_with_friends_instructions(self,username):
        print(dedent(f"""
        ${username} please enter the coordinates range of the corresponding size cell ships
        """))


#Player class with name  and  their ship  orientation
class Player:
    def __init__(self, name, board_orientation = [['_' for _ in range(10)] for _ in range(10)] ):
        self.name = name[0].upper() + name[1:len(name)]
        self.board_orientation  =  board_orientation
    
    def display_board(self):
        print(f"{self.name}'s Board:")

        # Column headers (1-10)
        print("   " + " ".join(str(num) for num in range(1, 11)))
        
        # Row headers (A-J) and board content
        row_labels = "ABCDEFGHIJ"
        for i, row in enumerate(self.board_orientation):
            print(row_labels[i] + "  " + " ".join(str(cell) for cell in row))
        
    def set_ships(self):
        # Let's assume ships sizes are [5, 4, 3, 3, 2] for carrier, battleship, cruiser, submarine, and destroyer
        ships = {"Carrier": 5, "Battleship": 4, "Cruiser": 3, "Submarine": 3, "Destroyer": 2}
        ships_placed = 0
        while ships_placed < len(ships):
            print(f"Placing {list(ships.keys())[ships_placed]}")
            # Example: For simplicity, you might use hard-coded coordinates or prompt the player to enter them.
            # Just an example for now:
            x = int(input("Enter row (1-10): ")) - 1  # Convert to 0-based index
            y = int(input("Enter column (1-10): ")) - 1  # Convert to 0-based index
            direction = input("Enter direction (H for horizontal, V for vertical): ").upper()

            # Check if the ship fits in the grid
            if direction == 'H' and y + ships[list(ships.keys())[ships_placed]] <= 10:
                for i in range(ships[list(ships.keys())[ships_placed]]):
                    self.board_orientation[x][y + i] = 'S'  # 'S' marks a ship
                ships_placed += 1
            elif direction == 'V' and x + ships[list(ships.keys())[ships_placed]] <= 10:
                for i in range(ships[list(ships.keys())[ships_placed]]):
                    self.board_orientation[x + i][y] = 'S'
                ships_placed += 1
            else:
                print("Invalid position, try again.")
        

class GameLogic:
    def __init__(self, play_with_friend, game_mode, player1, player2):
        self.play_with_friend = play_with_friend
        self.game_mode = game_mode
        self.player1 = player1
        self.player2 = player2
        self.board2 = board2
    


menu = MenuNavigation()
menu.main()

userInput = int(input("User: "))
game_mode = 0
play_with_friend = False
if userInput == 1:
    menu.rules()
elif userInput == 2:
    game_mode = menu.game_mode()
elif userInput == 3:
    game_mode = menu.game_mode()
    play_with_friend == True
    
    player1_username = input("Enter username for player1: ")
    player1 = Player(player1_username)
    print()

    
    #player2_username = int(input("Enter username for player2: "))
    #play_with_friend_game = GameLogic(play_with_friend, game_mode,)


