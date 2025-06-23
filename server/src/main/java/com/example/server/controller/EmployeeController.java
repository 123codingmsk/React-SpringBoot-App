package com.example.server.controller;

import com.example.server.entity.Employee;
import com.example.server.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5174")
@RestController
@RequestMapping("/employee")
@RequiredArgsConstructor

public class EmployeeController {

    private final EmployeeService employeeService;

    @PostMapping("/add")
    public Employee addEmployee(@RequestBody Employee employee){
        return employeeService.addEmployee(employee);
    }

    @GetMapping("/get/{email}")
    public Employee getEmployeeById(@PathVariable("email") String email){
        return employeeService.getEmployeeByEmail(email);
    }

    @GetMapping("/get")
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }

    @PutMapping("/edit/{email}")
    public Employee editByEmail(@PathVariable("email") String email, @RequestBody Employee employee){
        return employeeService.editByEmail(email, employee);
    }

    @DeleteMapping("/delete/{email}")
    public ResponseEntity<Employee> deleteByEmail(@PathVariable("email") String email){
        Employee deleted =  employeeService.deleteByEmail(email);
        return ResponseEntity.ok(deleted);
    }
}
