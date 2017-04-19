package week2;

import java.util.Scanner;
import models.GGTHPerson;

public class GGTH {

	public static void main(String[] args) {
		GGTHPerson minh = new GGTHPerson("Minh");
		GGTHPerson khoa = new GGTHPerson("Khoa");
		GGTHPerson khoa_other = new GGTHPerson("Khoa");
		GGTHPerson toan = new GGTHPerson("Toan");
		GGTHPerson other = new GGTHPerson("TNH");

		System.out.println("WHY .equals() instead of ==:");
		System.out.println("----------------------------");
		System.out.println("== Comparison: " + (khoa == khoa_other));
		System.out.println("default .equals() Comparison: " + khoa.equals(khoa_other));
		System.out.println("custom .soSanh() Comparison 1: " + khoa.soSanh(khoa_other));
		System.out.println("custom .soSanh() Comparison 2: " + khoa.soSanh(toan));

		// System.out.println("\nSIMPLE PROGRAM THAT USES OBJECT");
		// System.out.println("-------------------------------");
		// Scanner in = new Scanner(System.in);
		// String option;
		// while(true) {
		// 	System.out.print("Your name (0 to exit): ");
		// 	option = in.nextLine();

		// 	if(option.equals("0")) {
		// 		break;
		// 	} else if (option.equals("Khoa")) {
		// 		System.out.println(khoa.toTinh());
		// 	} else if (option.equals("Minh")) {
		// 		System.out.println(minh.toTinh());
		// 	} else if (option.equals("Toan")) {
		// 		System.out.println(toan.toTinh());
		// 	} else {
		// 		System.out.println(other.toTinh());
		// 	}
		// }

		// in.close();
	}

}
