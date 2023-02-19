package com.example.userregistrationservice.model.PincodeClasses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PincodeContainer {
    private  List<PinCode> pinCodes;
}
