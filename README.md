# Employee Management System (OOP Implementation)

## 📌 Project Overview
This project is a JavaScript-based workforce management system built using **Object-Oriented Programming (OOP)** principles. It models a corporate structure by defining base roles and specialized hierarchies through classes. The primary objective was to implement a scalable architecture using ES6 class syntax, focusing on inheritance, method overriding, and data encapsulation.

## 🚀 Technologies Used
*   **Language:** JavaScript
*   **Paradigm:** Object-Oriented Programming (OOP)
*   **Key Features:** 
    *   Class Inheritance (`extends`)
    *   Super Constructors (`super()`)
    *   Method Overriding
    *   Array-based Object Management

## ✨ Key Features
*   **Base Employee Modeling:** A robust `Employee` class that captures core attributes like name and department.
*   **Managerial Hierarchy:** A `Manager` subclass that inherits from the base class while extending functionality to include team size management.
*   **Polymorphic Descriptions:** Overridden `describe()` methods that provide context-specific information based on the object's role.
*   **Centralized Management:** A `Company` class that acts as a controller, managing a collection of employee objects and providing reporting functionality through automated list generation.

## 🏃 How to Run Locally
**Clone the repository:**
   ```bash
   git clone https://github.com/hientran20040303/oop-employee-management-system
