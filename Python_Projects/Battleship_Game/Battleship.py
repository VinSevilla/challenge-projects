from textwrap import dedent

class MainMenu:
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

class Player:
    def __init__(self, ships,):
        pass

print("-----------------------------------------------------------------------------------------------------")
print("""
.______        ___   .___________.___________. __       _______     _______. __    __   __  .______   
|   _  \      /   \  |           |           ||  |     |   ____|   /       ||  |  |  | |  | |   _  \  
|  |_)  |    /  ^  \ `---|  |----`---|  |----`|  |     |  |__     |   (----`|  |__|  | |  | |  |_)  | 
|   _  <    /  /_\  \    |  |        |  |     |  |     |   __|     \   \    |   __   | |  | |   ___/  
|  |_)  |  /  _____  \   |  |        |  |     |  `----.|  |____.----)   |   |  |  |  | |  | |  |      
|______/  /__/     \__\  |__|        |__|     |_______||_______|_______/    |__|  |__| |__| | _|                                                                                                                                                                                                                             
""")
print("-----------------------------------------------------------------------------------------------------\n")
print("Welcome to BATTLESHIP!")
print("Please enter the correct number for the corresponding action.")
print("""
1. View rules

2. Play against a friend.

3. Play against AI.
 """)

action = MainMenu()
userInput = int(input("User: "))
if userInput == 1:
    action.rules()
