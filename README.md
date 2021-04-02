# LazyAxios
My teacher asked me to insert 10 students in my scholl sql script. I was bored. CODING TIME  

Here we have the table where I should put the data  

CREATE TABLE tbl_aluno(  
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; codigo_aluno 			INT AUTO_INCREMENT PRIMARY KEY,  
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; name 			     VARCHAR(500) NOT NULL,  
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; secondname 			VARCHAR(500) NOT NULL,  
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; rg 					VARCHAR(20) NOT NULL,  
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; cpf 				VARCHAR(20) NOT NULL,  
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; email 		          VARCHAR(100) NOT NULL,  
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; phone 				VARCHAR(20) NOT NULL,  
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; cell 				VARCHAR(20) NOT NULL  
);  

So baically, I needed to randomize every one of those fields.   

So what I did was connect with the randomuser Api using an axios request, and them tried to get  
some of the info from them and randomize the others, well. I did it.  

Check their site, its a nice and free api to use!  
https://randomuser.me/  
