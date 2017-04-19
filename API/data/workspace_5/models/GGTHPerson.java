package models;

public class GGTHPerson {

	String name;

	public GGTHPerson(String name) {
		this.name = name;
	}

	public String toTinh() {
		String result = new String("");

		switch(name) {
			case "Khoa":
				result = "Cho minh muon cuc gom!";
				break;
			case "Minh":
				result = "Mono-Rail la gi?";
				break;
			case "Toan":
				result = "Minh thich an Dua hau!";
				break;
			default:
				result = "I love you!";
				break;
		}

		return result;
	}

	public boolean soSanh(GGTHPerson other) {
		if(other.name.equals(this.name)) {
			return true;
		} else return false;
	}

}
