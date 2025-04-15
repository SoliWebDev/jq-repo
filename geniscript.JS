$(document).ready(

    function(){
        
        $("#btn").click(
            function(event){
         event.preventDefault();      
    const userName = $("#userName").val();
    const age = $("#age").val();
    const gender = $("#gender").val();
    
    
    if(!userName || !age || !gender){
        // alert('please fill in field')
    
    
    }else{
    
        $("#userInfo").html(
            `<p>User Name ${userName}</p>
            <p>Age ${age}</p>
            <p>Gender ${gender}</p>`
        )
    
        alert(`User Name: ${userName}, Age: ${age},Gender ${gender}`)
    
    }
            }
        )
    }
    
    )
    
    
    // const btn = $("#btn")
    
    