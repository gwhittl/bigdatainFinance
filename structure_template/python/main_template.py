from main_class import main

#Data Path
input_data_path = "./input_data/";

#Initializing Main Class Object
data_object = main(input_data_path);

#Reading Object in, Parsing Data into Pandas Object, Checking for Null or Irregular Values (Validation)
data_object.read_and_parse_input_data();
