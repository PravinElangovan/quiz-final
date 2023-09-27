
//Questions Array
const questions = [
    {
        
        options : [
            {
                img:"./images/lamb-rogan-josh.png",
                correct:true,
                desc:"Lamp  is one of the largest and highest carbon food around the world",
                name:"Name of the dish",
            },
            {img:"./images/dmimg1.png",
            correct:false,
            desc:"Lamp  is one of the largest and highest carbon food around the world",
            name:"Name of the dish",
            },
        ]
 
    },
    {
        options : [
            {img:"./images/lamb-rogan-josh.png",
            correct:true,
            desc:"Lamp  is one of the largest and highest carbon food around the world",
            name:"Name of the Dish"
            },
            {img:"./images/dmimg1.png",
            correct:false,
            desc:"Lamp  is one of the largest and highest carbon food around the world",
            name:"Name of the dish",
            },
        ]
    },
    {
        options : [
            {img:"./images/lamb-rogan-josh.png",
            correct:false,
            desc:"Lamp  is one of the largest and highest carbon food around the world",
            name:"Name of the dish",
            },
            {img:"./images/lamb-rogan-josh.png",
            correct:true,
            desc:"Lamp  is one of the largest and highest carbon food around the world",
            name:"Name of the dish",
            },
        ]
    },
    {
        options : [
            {img:"./images/lamb-rogan-josh.png",
            correct:true,
            desc:"Lamp  is one of the largest and highest carbon food around the world",
            name:"Name of the dish",
            },
            {img:"./images/lamb-rogan-josh.png",
            correct:false,
            desc:"Lamp  is one of the largest and highest carbon food around the world",
            name:"Name of the dish",
            },
        ]
    },
    {
        options : [
            {img:"./images/lamb-rogan-josh.png",
            correct:false,
            desc:"Lamp  is one of the largest and highest carbon food around the world",
            name:"Name of the dish",
            },
            {img:"./images/lamb-rogan-josh.png",
            correct:true,
            desc:"Lamp  is one of the largest and highest carbon food around the world",
            name:"Name of the dish",
            },
        ]
    },
    {
        options : [
            {img:"./images/lamb-rogan-josh.png",
            correct:false,
            desc:"Lamp  is one of the largest and highest carbon food around the world",
            
            name:"Name of the dish",
            },
            {img:"./images/lamb-rogan-josh.png",
            correct:true,
            desc:"Lamp  is one of the largest and highest carbon food around the world",
            name:"Name of the dish",
            },
        ]
    },
    {
        options : [
            {img:"./images/lamb-rogan-josh.png",
            correct:true,
            desc:"Lamp  is one of the largest and highest carbon food around the world",
            name:"Name of the dish",
            },
            {img:"./images/lamb-rogan-josh.png",
            correct:false,
            desc:"Lamp  is one of the largest and highest carbon food around the world",
            name:"Name of the dish",
            },
        ]
    },
    {
        options : [
            {img:"./images/lamb-rogan-josh.png",
            correct:true,
            desc:"Lamp  is one of the largest and highest carbon food around the world",
            whyCorrect : "This is correct Bcoz of this" ,
            },
            {img:"./images/lamb-rogan-josh.png",
            correct:false,
            desc:"Lamp  is one of the largest and highest carbon food around the world",
            name:"Name of the dish",
            },
        ]
    },
    {
        options : [
            {img:"./images/lamb-rogan-josh.png",
            correct:true,
            desc:"Lamp  is one of the largest and highest carbon food around the world",
            name:"Name of the dish",
            },
            {img:"./images/lamb-rogan-josh.png",
            correct:false,
            desc:"Lamp  is one of the largest and highest carbon food around the world",
            name:"Name of the dish",
            },
        ]
    },
    {
        options : [
            {img:"./images/lamb-rogan-josh.png",
            correct:false,
            desc:"Lamp  is one of the largest and highest carbon food around the world",
            name:"Name of the dish",
            },
            {img:"./images/lamb-rogan-josh.png",
            correct:true,
            desc:"Lamp  is one of the largest and highest carbon food around the world",
            name:"Name of the dish",
            },
        ]
    }
]
//option Buttons DOM reference    
var optionButtons = document.getElementById('option-buttons');

var currentQuestionIndex = 0;
var userScore ; 
var score = 0;
var next = document.getElementById('next');
next.disabled=true;
//update user Score
const updateUserScore = () => {
    userScore = score;
    console.log(userScore)
};

//start Quiz function
const startQuiz = () =>{
    currentQuestionIndex=0;
    score=0;
    showQuestions();
    
}

//show qustion functon
const showQuestions = ()=>{
    reserState();
    
    var currentQuestion = questions[currentQuestionIndex];
    var questionNumer = currentQuestionIndex + 1;

    currentQuestion.options.forEach((option)=>{
       console.log(option.desc)
        const btnGroup = document.createElement('div');
        btnGroup.classList.add('btn-group');
        const text = document.createElement('p');
        text.innerText=option.name;
        text.classList.add('text');
        const button = document.createElement('img');
        button.src=option.img;
        button.alt="Img";
        button.classList.add("option1");
        btnGroup.appendChild(button);
        btnGroup.appendChild(text);
        optionButtons.appendChild(btnGroup);
        next.disabled=true;
        if(option.correct){
            // button.dataset.correct=option.correct;
            btnGroup.dataset.correct=option.correct;
            
        }

        // btnGroup.addEventListener('click',(e)=>{
        //     var selectedButton = e.target;
        //     console.log(selectedButton)
        //     var isCorrect = selectedButton.dataset.correct=="true";
        //     if(isCorrect){
        //         selectedButton.classList.add("correct");
        //         score++;
        //         //why this is correct ...
        //         text.style.display="none";
        //         text.innerHTML=option.desc;
        //         console.log(text);
        //         text.style.display="block";
        //         text.style.paddingLeft="1.3rem"
        //         text.style.color="white"
        //         next.disabled=false;
        //     }
        //     else{
        //         selectedButton.classList.add("wrong");
        //         //why it is wrong ...
        //         text.style.display="none";
        //         text.innerHTML=option.desc;
        //         console.log(text);
        //         text.style.display="block";
        //         text.style.paddingLeft="1.3rem"
        //         text.style.color="white"
        //         next.disabled=false;
        //     }
        //     Array.from(optionButtons.children).forEach(btnGroup=>{
        //         console.log(btnGroup);
        //         if(btnGroup.dataset.correct === true){
        //             btnGroup.classList.add("correct");
                    
        //         }
        //         btnGroup.disabled=true;
        //     })
        // })
//         let selectionMade = false; // Add this variable to track if a selection has been made

// btnGroup.addEventListener('click', (e) => {
//     if (selectionMade){
       
//         return;
//     }; // Return if a selection has already been made

//     var selectedButton = e.target.closest('.btn-group');
//     if (!selectedButton) return;
    
//     selectionMade = true; // Set the flag to true to indicate a selection has been made

//     var isCorrect = selectedButton.dataset.correct == "true";

//     if (isCorrect) {
//         selectedButton.classList.add("correct");
//         score++;
//         // why this is correct ...
//         text.style.display = "none";
//         text.innerHTML = option.desc;
//         text.style.display = "block";
//         text.style.paddingLeft = "1.3rem";
//         text.style.color = "white";
//         next.disabled = false;
//     } else {
//         selectedButton.classList.add("wrong");
//         // why it is wrong ...
//         text.style.display = "none";
//         text.innerHTML = option.desc;
//         text.style.display = "block";
//         text.style.paddingLeft = "1.3rem";
//         text.style.color = "white";
//         next.disabled = false;
//     }

//     // Disable all option buttons after a selection
    
//         Array.from(btnGroup.children).forEach((button) => {
//             button.disabled = true;
//         });
    
// });
        
        
    // })
    // console.log(optionButtons)

    btnGroup.addEventListener('click', () => {
        if (btnGroup.classList.contains('answered')) {
            // Do nothing if the user has already answered this question
            return;
        }
        
        btnGroup.classList.add('answered'); // Mark the group as answered
        
        var isCorrect = btnGroup.dataset.correct === "true";
        if (isCorrect) {
            button.classList.add("correct");
            score++;
            // why this is correct ...
            btnGroup.style.backgroundColor="green"
            text.style.display = "none";
            text.innerHTML = option.desc;
            console.log(text);
            text.style.display = "block";
            text.style.paddingLeft = "1.3rem";
            text.style.color = "white";
            next.disabled = false;
        } else {
            button.classList.add("wrong");
            // why it is wrong ...
            btnGroup.style.backgroundColor="red"
            text.style.display = "none";
            text.innerHTML = option.desc;
            console.log(text);
            text.style.display = "block";
            text.style.paddingLeft = "1.3rem";
            text.style.color = "white";
            next.disabled = false;
        }

        // Disable other buttons in the same btnGroup
        const otherButtons = Array.from(optionButtons.querySelectorAll('.btn-group'));
        otherButtons.forEach(otherBtnGroup => {
            if (otherBtnGroup !== btnGroup) {
                otherBtnGroup.classList.add('answered'); // Mark others as answered
            }
        });
    });
    })

}



//this function is rest the option buttons
const reserState = () =>{
    while(optionButtons.firstChild){
        optionButtons.removeChild(optionButtons.firstChild)
    }
}
let currentProgress = 10;
const maxProgress = 100;
let progressInterval; // Declare the progressInterval variable outside the event handler

next.addEventListener("click", () => {
    currentQuestionIndex = currentQuestionIndex + 1;
    var progressBar = document.getElementById('file-progress');
    var progressText = document.getElementById('progress-text')

    // Increment the progress
    currentProgress += 10; // Increment by 10% (you can change this value)
    progressBar.value = currentProgress;
    progressText.textContent = `Q 0${currentQuestionIndex+1} of 10`;
    if(currentQuestionIndex===9){
        
        showResult();
        next.style.display="none";
        document.getElementById("quiz-container").style.display="none";
        
    }
    // Check if the progress has reached 100%
    if (currentProgress >= maxProgress) {
        clearInterval(progressInterval); // Clear the interval
    }

    showQuestions();
});


const showResult = ()=>{
    //results
    updateUserScore();
    console.log(score);
    results();
    var result= document.getElementById('result-container');
    result.style.display="block";

    
}






var setOfResults = [
    {
        heading  : "Meat Consumption",
        description : [
            {
                text : "This is based on your quiz score you can improve this 1",marks:[1,2]
            },
            {
                text : "This is based on your quiz score you can improve this 2",marks:[3,4]
            },
            {
                text : "This is based on your quiz score you can improve this 3",marks:[5,6]
            },
            {
                text : "This is based on your quiz score you can improve this 4",marks:[7,8]
            },
            {
                text : "This is based on your quiz score you can improve this 5",marks:[9,10]
            }
        ]

    },
    {
        heading  : "Food Waste",
        description : [
            {
                text : "This is based on your quiz score you can improve this 1",marks:[1,2]
            },
            {
                text : "This is based on your quiz score you can improve this 2",marks:[3,4]
            },
            {
                text : "This is based on your quiz score you can improve this 3",marks:[5,6]
            },
            {
                text : "This is based on your quiz score you can improve this 4",marks:[7,8]
            },
            {
                text : "This is based on your quiz score you can improve this 5",marks:[9,10]
            }
        ]
    },
    {
        heading  : "Foot Literacy",
        description : [
            {
                text : "This is based on your quiz score you can improve this 1",marks:[1,2]
            },
            {
                text : "This is based on your quiz score you can improve this 2",marks:[3,4]
            },
            {
                text : "This is based on your quiz score you can improve this 3",marks:[5,6]
            },
            {
                text : "This is based on your quiz score you can improve this 4",marks:[7,8]
            },
            {
                text : "This is based on your quiz score you can improve this 5",marks:[9,10]
            }
        ]
    },
    {
        heading  : "Local & Seasonal Sourcing",
        description : [
            {
                text : "This is based on your quiz score you can improve this 1",marks:[1,2]
            },
            {
                text : "This is based on your quiz score you can improve this 2",marks:[3,4]
            },
            {
                text : "This is based on your quiz score you can improve this 3",marks:[5,6]
            },
            {
                text : "This is based on your quiz score you can improve this 4",marks:[7,8]
            },
            {
                text : "This is based on your quiz score you can improve this 5",marks:[9,10]
            }
        ]
    },
    {
        heading  : "Worker Welfare",
        description : [
            {
                text : "This is based on your quiz score you can improve this 1",marks:[1,2]
            },
            {
                text : "This is based on your quiz score you can improve this 2",marks:[3,4]
            },
            {
                text : "This is based on your quiz score you can improve this 3",marks:[5,6]
            },
            {
                text : "This is based on your quiz score you can improve this 4",marks:[7,8]
            },
            {
                text : "This is based on your quiz score you can improve this 5",marks:[9,10]
            }
        ]
    },
]

var resultBoxes = document.getElementById('boxes');











console.log(resultBoxes);
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var desc = document.getElementById('desc');
var desc = "";


const results = () => {
    setOfResults.forEach((result, index) => {
        resultBoxes.innerHTML += `
            <div>
                <div class="box-1">
                    <div>${result.heading}</div>
                    <div class="plus" data-index="${index}">+</div>
                    <div class="minus" data-index="${index}">-</div>
                </div>
                <div class="desc" id="desc-${index}">
                    This is Description ---> ${getDescription(userScore, result.description)}
                </div>
            </div>
        `;
    });

    // Attach event listeners for plus and minus buttons
    plusMinus();
};

const getDescription = (userScore, descriptions) => {
    const description = descriptions.find(item => {
        const [min, max] = item.marks;
        return userScore >= min && userScore <= max;
    });

    return description ? description.text : "Not Matches, retake the quiz";
};

const plusMinus = () => {
    const plusButtons = document.querySelectorAll('.plus');
    const minusButtons = document.querySelectorAll('.minus');

    plusButtons.forEach(plus => {
        plus.addEventListener('click', () => {
            const index = plus.getAttribute('data-index');
            const desc = document.getElementById(`desc-${index}`);
            if (desc) {
                desc.style.display = 'block';
            }
            plus.style.display = 'none';
            const minus = document.querySelector(`.minus[data-index="${index}"]`);
            if (minus) {
                minus.style.display = 'block';
            }
        });
    });

    minusButtons.forEach(minus => {
        minus.addEventListener('click', () => {
            const index = minus.getAttribute('data-index');
            const desc = document.getElementById(`desc-${index}`);
            if (desc) {
                desc.style.display = 'none';
            }
            minus.style.display = 'none';
            const plus = document.querySelector(`.plus[data-index="${index}"]`);
            if (plus) {
                plus.style.display = 'block';
            }
        });
    });
};

// Call the initial functions
showQuestions();



























showQuestions();

