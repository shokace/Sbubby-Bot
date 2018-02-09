import praw
import reddit_config
import sys


def bot_login():
		r = praw.Reddit(username=reddit_config.username,
					password=reddit_config.password,
					client_id=reddit_config.client_id,
					client_secret=reddit_config.client_secret,
					user_agent="Shokace's Sbubby Bot v1.0")
					
		print("Sbubby Bot\nCreated By Shokace")
		
		submissions = r.subreddit('sbubby').top(limit=100) #take top 100 sbubby maymays
		with open ('dump.txt', 'w') as file:
			for item in submissions:
				file.write (item.url + '\n')		#write to dump.txt
				
				
		print("\ndump.txt Created!\n")

		return r



def main():
	r = bot_login()
	

if __name__ == "__main__":
    main()