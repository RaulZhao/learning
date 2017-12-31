/**
*  We are building a webpage that can display people sorted by any of the Person fields.
*  Sample request: /people?sortField=dateOfBirth&ascending=false
**/
import java.util.*;

public class PersonSort {
	public static void main(String[] args) {
		// Test Case
		ArrayList<Person> list = new ArrayList<Person>();
		Person p1 = new Person("234-34-78", new Date("3/2/1985"), "ABC", "CBA", 170.10, 90.20);
		Person p2 = new Person("159-20-78", new Date("2/23/1984"), "DEF", "FED", 150.30, 130.46);
		Person p3 = new Person("743-91-78", new Date("10/1/1987"), "BCD", "DCB", 170.40, 200.77);
		Person p4 = new Person("662-57-88", new Date("7/8/1997"), "XYZ", "ZYX", 108.00, 110.58);
		list.add(p1);
		list.add(p2);
		list.add(p3);
		list.add(p4);
		PersonSort.sort(list, "dateOfBirth", "false");
	}

	// The sorting method
	static List<Person> sort(Iterable<Person> people, String sortField, String ascending) {
		ArrayList<Person> persons = new ArrayList<Person>();
		Comparator comparator = null;
		Iterator<Person> it = people.iterator();
		while(it.hasNext()) {
			persons.add(it.next());
		}

		switch(sortField.toLowerCase()) {
			case "ssn":
				comparator = new SSNComparator();
				break;
			case "dateofbirth":
				comparator = new DateOfBirthComparator();
				break;
			case "firstname":
				comparator = new FirstNameComparator();
				break;
			case "lastname":
				comparator = new LastNameComparator();
				break;
			case "heightin":
				comparator = new HeightInComparator();
				break;
			case "weightlb":
				comparator = new WeightLbComparator();
				break;
		}
		if(comparator == null) {
			return null;
		}

		persons.sort(comparator);
		if(ascending.equals("false")) {
			Collections.reverse(persons);
		}
		return persons;
	}

  // Implements comparator interface
	static class SSNComparator implements Comparator {
		@Override
		public int compare(Object o1, Object o2) {
			Person p1 = (Person) o1;
			Person p2 = (Person) o2;
			return p1.ssn.compareTo(p2.ssn);
		}
	}
	static class DateOfBirthComparator implements Comparator {
		@Override
		public int compare(Object o1, Object o2) {
			Person p1 = (Person) o1;
			Person p2 = (Person) o2;
			return p1.dateOfBirth.compareTo(p2.dateOfBirth);
		}
	}
	static class FirstNameComparator implements Comparator {
		@Override
		public int compare(Object o1, Object o2) {
			Person p1 = (Person) o1;
			Person p2 = (Person) o2;
			return p1.firstName.compareTo(p2.firstName);
		}
	}
	static class LastNameComparator implements Comparator {
		@Override
		public int compare(Object o1, Object o2) {
			Person p1 = (Person) o1;
			Person p2 = (Person) o2;
			return p1.lastName.compareTo(p2.lastName);
		}
	}
	static class HeightInComparator implements Comparator {
		@Override
		public int compare(Object o1, Object o2) {
			Person p1 = (Person) o1;
			Person p2 = (Person) o2;
			return p1.heightIn.compareTo(p2.heightIn);
		}
	}
	static class WeightLbComparator implements Comparator {
		@Override
		public int compare(Object o1, Object o2) {
			Person p1 = (Person) o1;
			Person p2 = (Person) o2;
			return p1.weightLb.compareTo(p2.weightLb);
		}
	}

}

class Person {
	String ssn;
	Date dateOfBirth;
	String firstName;
	String lastName;
	Double heightIn;
	Double weightLb;

	public Person(String ssn, Date dateOfBirth, String firstName, String lastName, Double heightIn, Double weightLb) {
		this.ssn = ssn;
		this.dateOfBirth = dateOfBirth;
		this.firstName = firstName;
		this.lastName = lastName;
		this.heightIn = heightIn;
		this.weightLb = weightLb;
	}
}
