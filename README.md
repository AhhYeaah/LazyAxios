# LazyAxios
My teacher asked me to insert 10 students in my scholl sql script. I was bored. CODING TIME  

Here we have the table where I should put the data  

CREATE TABLE tbl_aluno(  
     codigo_aluno 			INT AUTO_INCREMENT PRIMARY KEY,  
     name 			     VARCHAR(500) 		NOT NULL,  
     secondname 			VARCHAR(500) NOT NULL,  
     rg 					VARCHAR(20) NOT NULL,  
     cpf 					VARCHAR(20) NOT NULL,  
     email 		          VARCHAR(100) NOT NULL,  
     phone 				VARCHAR(20) NOT NULL,  
     cell 				VARCHAR(20) NOT NULL  
);  

So baically, I needed to randomize every one of those fields.   

So what I did was connect with the randomuser Api using an axios request, and them tried to get  
some of the info from them and randomize the others, well. I did it.  

Check their site, its a nice and free api to use!  
https://randomuser.me/  
