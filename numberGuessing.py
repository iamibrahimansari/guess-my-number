from logo import logo

from random import randint

print(logo)

print("Welcome to the number guessing game!")
print("I'm thinking of a number between 1 and 100.")
level = input("Choose a difficulty. Type 'easy' or 'hard': ")

hidden_number = randint(1, 100)

if level == "easy":
	attempts = 10
elif level == "hard":
	attempts = 5

while attempts > 0:
	print(f"You have {attempts} attempts remaining to guess the number")
	guessing_number = int(input("Make a guess: "))
	if guessing_number < hidden_number:
		print("Too low")
	elif guessing_number > hidden_number:
		print("Too high")
	else:
		print(f"You got it! The answer was {hidden_number}")
		break
	if attempts != 1: print("Guess again.")
	attempts -= 1

else:
	print("You've run out of guesses, you lose.")