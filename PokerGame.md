```java
package src.com.raul;

import java.util.*;

public class PokerGame {
	public static void main(String[] args) {
		Deck deck = new Deck();
		User user1 = new User("James");
		User user2 = new User("Sam");
		User user3 = new User("Mike");
		User user4 = new User("Jordan");
		try {
			deck.initPokers();
			deck.register(user1);
			deck.register(user2);
			deck.register(user3);
			deck.register(user4);
			deck.startGame();
			System.out.println(deck.compareCard(user1, user2));
			System.out.println(deck);
		} catch(Exception evt) {
			System.out.println(evt);
		}
	}
}

// Deck Class is used to manage users and cards
class Deck {
	List<Poker> pokers = new LinkedList<Poker>();
	List<User> users = new ArrayList<User>();

	public void initPokers() throws Exception {
		if (pokers.size() > 0) {
			pokers.clear();
		}
		for (int i=0; i < 52; i++) {
			pokers.add(new Poker(i));
		}
	}

	public Poker shuffle() throws Exception{
		if (pokers.isEmpty()) {
			throw new Exception("No Pokers in the buffer");
		}
		long randomIndex = Math.round(Math.random() * pokers.size());

		return pokers.remove((int) randomIndex);
	}

	public void register(User user) {
		if (!users.contains(user)) {
			users.add(user);
		}
	}

	public void assignCardToPlayer(User user) throws Exception{
		user.setPoker(shuffle());
	}

	public boolean compareCard(User u1, User u2) {
		if (u1 == null) {
			return false;
		}
		if (u2 == null) {
			return true;
		}
		return u1.getPoker().compareTo(u2.getPoker()) == 1;
	}

	public void startGame() throws Exception{
		for(User user : users) {
			assignCardToPlayer(user);
		}
		for(User user : users) {
			System.out.println(user);
		}
	}

	public String toString() {
		StringBuilder sb = new StringBuilder();
		for (Poker p : pokers) {
			sb.append(p).append('\n');
		}
		return sb.toString();
	}
}

// Game player class
class User {
	private String id;
	private String name;
	private Poker poker = null;

	public User(String name) {
		setId(UUID.randomUUID().toString());
		setName(name);
	}

	public void setPoker(Poker p) {
		poker = p;
	}

	private void setId(String id) {
		this.id = id;
	}

	private void setName(String name) {
		this.name = name;
	}

	public Poker getPoker() {
		return this.poker;
	}

	public String getId() {
		return this.id;
	}

	public String getName() {
		return this.name;
	}

	public String toString() {
		return "Player " + getName() + " took card - " + getPoker();
	}
}

// Poker Class
class Poker implements Comparable<Poker>{
	public static String[] NUMBERS = {"2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"};
	public static String[] COLORS = {"Spade", "Heart", "Club", "Diamond"};

	private int cardIndex;
	private int colorIndex;
	private String card;
	private String color;

	public Poker(int index) throws Exception{
		if(index < 0 || index > 51) {
			throw new Exception("Poker index - " + index + " is not acceptable");
		}
		colorIndex = index / 13;
		cardIndex = index % 13;
		setColor(colorIndex);
		setCard(cardIndex);
	}

	public String getCard() {
		return this.card;
	}

	public String getColor() {
		return this.color;
	}

	private void setCard(int cardIndex) {
		if (cardIndex >= NUMBERS.length) {
			System.out.println("Invalid card");
		}
		this.card = NUMBERS[cardIndex];
	}

	private void setColor(int colorIndex) {
		if (colorIndex >= COLORS.length) {
			System.out.println("Invalid card");
		}
		this.color = COLORS[colorIndex];
	}

	public String toString() {
		return getColor() + "," + getCard();
	}

	@Override
	public int compareTo(Poker o) {
		if (this.cardIndex > o.cardIndex) {
			return 1;
		} else if (this.cardIndex == o.cardIndex) {
			if (this.colorIndex <= o.colorIndex) {
				return 1;
			} else {
				return -1;
			}
		} else {
			return -1;
		}
	}
}
```
