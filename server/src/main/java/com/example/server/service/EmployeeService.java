package com.example.server.service;

import com.example.server.entity.Employee;
import com.example.server.exceptions.EmployeeNotFoundException;
import com.example.server.repository.EmployeeRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    @Autowired
    private final EmployeeRepo employeeRepo;

    //adding employee
    public Employee addEmployee(Employee employee){
        return employeeRepo.save(employee);
    }

    //get employee by id
    public Employee getEmployeeByEmail(String email){
        return employeeRepo.findByEmail(email).orElseThrow(()->new EmployeeNotFoundException(email));
    }

    //get all Employees
    public List<Employee> getAllEmployees(){
        return employeeRepo.findAll();
    }

    //edit employee by email
    public Employee editByEmail(String email, Employee employee){
       return employeeRepo.findByEmail(email)
               .map(existed->{
                   existed.setName(employee.getName());
                   existed.setEmail(employee.getEmail());
                   existed.setPhone(employee.getPhone());
                   existed.setDepartment(employee.getDepartment());
                   return employeeRepo.save(existed);
               }).orElseThrow(()->new EmployeeNotFoundException("Email not found: "+email));
    }

    //delete employee by email
    public Employee deleteByEmail(String email){
        Employee employee = employeeRepo.findByEmail(email)
                .orElseThrow(()->new EmployeeNotFoundException("Email Not Found: "+email));
        employeeRepo.delete(employee);
        return employee;
    }
}
