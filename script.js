// Data structure for interactive flow chart explanations (UPDATED with new session data)
const flowChartData = {
    // Java Compilation Process
    compilation: {
        source: {
            title: "Source Code (.java file) - Step 1",
            text: "This is the raw, human-readable code written by the programmer. It must follow Java syntax rules. It's the starting point of any Java application."
        },
        bytecode: {
            title: "Bytecode (.class file) - Step 2",
            text: "The 'javac' compiler translates the source code into bytecode. This is an intermediate, machine-independent code format. It cannot be run directly by the operating system."
        },
        jvm: {
            title: "Java Virtual Machine (JVM) - Step 3",
            text: "The JVM is the crucial component that runs the bytecode. Since the JVM is different for every operating system (Windows, macOS, Linux), the same bytecode can run everywhere—this is the 'Write Once, Run Anywhere' promise."
        }
    },
    // Conditional Statements Flow
    conditional: {
        condition: {
            title: "Condition Check (Decision Box)",
            text: "The program evaluates a boolean expression (e.g., `number % 2 == 0`). Based on the outcome, the program decides which path to follow. This is the core of decision-making."
        },
        'true-path': {
            title: "True Path Execution",
            text: "If the condition evaluates to TRUE, the program follows this path."
        },
        'false-path': {
            title: "False Path Execution",
            text: "If the condition evaluates to FALSE, the program follows this path (often to an `else` block)."
        },
        'if-block': {
            title: "Execute 'if' Block",
            text: "This block contains the instructions that run only when the primary condition is met."
        },
        'else-block': {
            title: "Execute 'else' Block",
            text: "This block contains the instructions that run when the primary condition is NOT met."
        }
    },
    // Loop Flow
    loop: {
        initialize: {
            title: "Initialization (Start)",
            text: "A loop control variable (e.g., `int i = 1;`) is created and given a starting value. This happens only once."
        },
        'condition-check': {
            title: "Condition Check (Decision Box)",
            text: "The loop condition (e.g., `i <= 5;`) is evaluated. If TRUE, the loop continues; if FALSE, the loop terminates and execution moves to the next statement."
        },
        'execute-body': {
            title: "Execute Body (Loop Content)",
            text: "The instructions inside the loop's curly braces (`{}`) are executed."
        },
        update: {
            title: "Update (Increment/Decrement)",
            text: "The loop control variable is modified (e.g., `i++`). This prevents the loop from running forever and prepares for the next condition check."
        },
        exit: {
            title: "Exit Loop (End)",
            text: "The loop terminates, and the program resumes execution at the statement immediately following the loop structure."
        }
    },
    // Function Flow (Retained)
    function: {
        'main-call': {
            title: "Main Program (Caller)",
            text: "The main program requires a specific task and 'calls' a function, passing along any necessary data (arguments)."
        },
        parameters: {
            title: "Function Definition (Parameters Received)",
            text: "The called function receives the input values (parameters) and stores them in local variables, preparing to execute its dedicated logic."
        },
        execution: {
            title: "Execute Function Body",
            text: "The function performs its task, which usually involves computation or logic, without affecting other parts of the program."
        },
        'return-value': {
            title: "Return Value (Output)",
            text: "If the function is not `void`, it sends a value back to the caller using 'return'."
        },
        'main-return': {
            title: "Back to Main (Result Used)",
            text: "The calling program receives the returned value and continues its execution, often using the result for further calculations or output."
        }
    },
    // Array Flow (NEW)
    array: {
        'array-declaration': {
            title: "Array Declaration - Step 1",
            text: "An array variable is declared with a specific type and size. For example, 'int[] arr = new int[5];' creates an array that can hold 5 integers. The array name serves as a reference to the entire collection."
        },
        'array-memory': {
            title: "Memory Allocation - Step 2",
            text: "Java allocates a contiguous block of memory with slots numbered from 0 to (size-1). All elements are initialized to default values (0 for numbers, null for objects)."
        },
        'array-index': {
            title: "Index Access - Step 3",
            text: "Individual elements are accessed using square bracket notation with the index: arr[0], arr[1], etc. Array indices start at 0."
        },
        'array-traversal': {
            title: "Traversal - Step 4",
            text: "Loops are used to process all array elements, either using the index for ordered access or enhanced for loops for simplicity."
        }
    },
    // OOP Class Flow (NEW)
    'oop-class': {
        'class-definition': {
            title: "Class Definition - Step 1 (Blueprint)",
            text: "A class is created as a blueprint containing attributes (data) and methods (behavior). This is the design phase. No memory is allocated yet."
        },
        'object-creation': {
            title: "Object Creation - Step 2 (Instantiation)",
            text: "Objects are created using the 'new' keyword followed by a constructor call: 'Student s1 = new Student();'. This allocates memory for the object and returns a reference."
        },
        'set-attributes': {
            title: "Set Attributes - Step 3 (Initialization)",
            text: "Object attributes are initialized either through constructor parameters or setter methods. Each object gets its own unique copy of the attributes."
        },
        'call-methods': {
            title: "Call Methods - Step 4 (Behavior)",
            text: "Methods are invoked on objects using dot notation: 's1.calculateAverage();'. The method performs operations specific to that object's data."
        }
    },
    // Constructor Flow (NEW)
    constructor: {
        'new-keyword': {
            title: "New Keyword - Step 1",
            text: "The 'new' operator starts the object creation process, signaling Java to allocate memory."
        },
        'memory-allocation': {
            title: "Memory Allocated - Step 2",
            text: "Memory is allocated in the heap for the new object's attributes. Attributes receive default values."
        },
        'constructor-call': {
            title: "Constructor Called - Step 3",
            text: "The constructor runs, using 'this.attribute = parameter' to initialize the object's data with custom values."
        },
        'object-ready': {
            title: "Object Ready - Step 4",
            text: "The constructor finishes, and a reference (memory address) to the fully initialized object is returned and stored in the variable."
        }
    },
    // Project Flow (Retained)
    project: {
        'input-data': {
            title: "Input Data - Step 1",
            text: "The program prompts the user for student information: name, roll number, and marks for multiple subjects. Use Scanner to read input."
        },
        'create-objects': {
            title: "Create Objects - Step 2",
            text: "For each student's data, create a Student object using the constructor and store it in an array: 'students[i] = new Student(...);'. The array acts as a collection."
        },
        'process-data': {
            title: "Process Data - Step 3",
            text: "Loop through the array of student objects and call methods on each one (e.g., 'student.calculateAverage()') to transform raw data."
        },
        'find-topper': {
            title: "Find Topper - Step 4",
            text: "Compare all students by iterating through the array and tracking the student object with the highest average."
        },
        'display-report': {
            title: "Display Report - Step 5",
            text: "Present the final report, showing individual student details and class statistics (topper, class average)."
        }
    }
};

// --- DOM Elements ---
const fullscreenBtn = document.getElementById('fullscreenBtn');
const codeViewerModal = document.getElementById('codeViewerModal');
const codeViewerClose = document.getElementById('codeViewerClose');
const codeViewerBody = document.getElementById('codeViewerBody');

// Note: Reusing generic names for flow modal elements, as there is only one flow modal now.
const flowModal = document.getElementById('flowModal');
const flowModalClose = document.getElementById('flowModalClose');
const flowModalTitle = document.getElementById('flowModalTitle');
const flowModalExplanation = document.getElementById('flowModalExplanation');


// --- Helper Function: Copy to Clipboard (Retained) ---
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed'; 
    textarea.style.top = '0'; 
    textarea.style.left = '0'; 
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        
        const notification = document.createElement('div');
        notification.textContent = 'Code Copied!';
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #4CAF50; /* Success Green */
            color: white;
            padding: 0.8rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 600;
            z-index: 10001;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
        `;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 1000); 
    } catch (err) {
        console.error('Failed to copy text: ', err);
    } finally {
        document.body.removeChild(textarea);
    }
}

// --- Fullscreen Toggle (Retained) ---
fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});
document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
        fullscreenBtn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
            </svg>
        `;
        fullscreenBtn.title = 'Exit Fullscreen';
    } else {
        fullscreenBtn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
            </svg>
        `;
        fullscreenBtn.title = 'Enter Fullscreen';
    }
});

// --- UI Navigation/Scroll/Animation (Retained) ---
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navHeight = document.querySelector('.navigation').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
const sections = document.querySelectorAll('.session');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    const navHeight = document.querySelector('.navigation').offsetHeight;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - navHeight - 100) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
const observerOptions = { threshold: 0.05, rootMargin: '50px 0px 50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);
document.querySelectorAll('.topic').forEach(topic => {
    topic.style.opacity = '0';
    topic.style.transform = 'translateY(30px)';
    topic.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(topic);
});
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        window.print();
    }
});
console.log('%c🚀 Welcome to Java CodeLabs 2025!', 'color: #00FFFF; font-size: 20px; font-weight: bold;');
console.log('%cNISB Computer Society', 'color: #FF7B00; font-size: 16px;');
console.log('%cHappy Learning! 💻', 'color: #A8FFC0; font-size: 14px;');


// --- CODE VIEWER BUTTON LOGIC ---
document.querySelectorAll('.code-viewer-btn').forEach(button => {
    button.addEventListener('click', () => {
        const codeId = button.dataset.target;
        // Use button.parentElement to find the right code block, as button might be outside the code-section-inline wrapper
        let codeElement = document.getElementById(codeId);
        
        // This handles the case where the button is immediately following a <pre> inside a different wrapper like .code-section-inline
        if (!codeElement) {
             const parent = button.closest('.content-text') || button.closest('.code-section');
             if (parent) {
                codeElement = parent.querySelector(`#${codeId}`);
             }
        }

        if (codeElement) {
            const codeContent = codeElement.querySelector('code').textContent;
            
            // 1. Show code in dedicated modal
            codeViewerBody.innerHTML = `<pre><code>${codeContent}</code></pre>`;
            codeViewerModal.style.display = 'flex';
            
            // 2. Perform copy operation
            copyToClipboard(codeContent);
        }
    });
});

// Close code viewer modal
codeViewerClose.addEventListener('click', () => {
    codeViewerModal.style.display = 'none';
});
window.addEventListener('click', (event) => {
    if (event.target === codeViewerModal) {
        codeViewerModal.style.display = 'none';
    }
});


// --- Flowchart Interactivity ---
document.querySelectorAll('.flowchart').forEach(chart => {
    const chartName = chart.dataset.chart;
    
    // Select both flow-box and flow-arrow-side for click events
    chart.querySelectorAll('.flow-box, .flow-arrow-side').forEach(stepElement => {
        // Add cursor style for visual cue
        stepElement.style.cursor = 'pointer';

        stepElement.addEventListener('click', () => {
            // Remove previous highlight from ALL steps in this chart
            chart.querySelectorAll('.flow-box, .flow-arrow-side').forEach(box => box.classList.remove('highlight'));

            // Apply highlight to current step
            stepElement.classList.add('highlight');

            // Determine if the clicked element is the flow box itself or the label (flow-arrow-side)
            const dataElement = stepElement.dataset.step;
            
            let stepData;
            if (dataElement) {
                 stepData = flowChartData[chartName][dataElement];
            }
            
            if (stepData) {
                // Populate flow modal
                flowModalTitle.textContent = stepData.title;
                flowModalExplanation.innerHTML = `<p style="color: white; line-height: 1.6;">${stepData.text}</p>`;
                
                // Show flow modal
                flowModal.style.display = 'flex';
            }
        });
    });
});

// Close flow modal
flowModalClose.addEventListener('click', () => {
    flowModal.style.display = 'none';
    document.querySelectorAll('.flowchart .highlight').forEach(box => box.classList.remove('highlight'));
});

// ESC key press to close any open modal
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (codeViewerModal.style.display === 'flex') {
            codeViewerModal.style.display = 'none';
        } else if (flowModal.style.display === 'flex') {
            flowModal.style.display = 'none';
            document.querySelectorAll('.flowchart .highlight').forEach(box => box.classList.remove('highlight'));
        }
    }
});
