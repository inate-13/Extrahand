package com.example.userregistrationservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Experience {
    private String profession;
    private int experience;
    private String description;
    private List<String> subProfession;
}
