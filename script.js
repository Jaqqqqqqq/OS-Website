// Page Content Data
const pageData = {
    home: {
        title: 'HOME',
        content: `
            <h1>Welcome to OS Website</h1>
            <p>This is a minimalist website dedicated to operating systems education and laboratory activities. Navigate through the menu to explore installation guides, laboratory activities, and finals.</p>
            <h2>Getting Started</h2>
            <p>Use the navigation menu above to explore different sections:</p>
            <ul style="margin-left: 20px; color: #333333;">
                <li><strong>Windows Installation:</strong> Step-by-step guides for installing Windows OS</li>
                <li><strong>Laboratory Activities:</strong> Hands-on lab exercises and projects</li>
                <li><strong>Finals:</strong> Final exam preparation and review materials</li>
                <li><strong>About:</strong> Information about this course</li>
            </ul>
            <div id="homeVideoContainer"></div>
        `
    },
    about: {
        title: 'ABOUT',
        content: `
            <h1>About This Website</h1>
            <p>This website serves as a comprehensive resource for operating systems education, featuring detailed installation guides, laboratory activities, and examination materials.</p>
            <h2>Features</h2>
            <ul style="margin-left: 20px; color: #333333;">
                <li>Minimalist, user-friendly design</li>
                <li>Comprehensive Windows installation guide</li>
                <li>Interactive laboratory activities</li>
                <li>Final exam preparation materials</li>
                <li>YouTube video integration on every page</li>
            </ul>
            <h2>Design</h2>
            <p>This website uses a clean black, white, and light pink color scheme for optimal readability and modern aesthetics.</p>
            <div id="aboutVideoContainer"></div>
        `
    }
};

// Generate page data for Windows Installation (13 pages)
for (let i = 1; i <= 13; i++) {
    pageData[`win${i}`] = {
        title: `Windows Installation - Step ${i}`,
        content: `
            <h1>Windows Installation - Step ${i}</h1>
            <p>Add your content for Windows Installation Step ${i} here.</p>
            <h2>Instructions</h2>
            <p>Provide detailed step-by-step instructions for this installation step.</p>
            <div class="video-input-section">
                <h3>Add a YouTube Video</h3>
                <div class="form-group">
                    <label for="win${i}Video">YouTube Video URL (or Video ID):</label>
                    <input type="text" id="win${i}Video" placeholder="e.g., dQw4w9WgXcQ or https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                </div>
                <button class="btn" onclick="addVideo('win${i}VideoContainer', 'win${i}Video')">Add Video</button>
            </div>
            <div aboratory Activity ${i}`,
        content: `
            <h1>Laboratory Activity ${i}</h1>
            <p>This is a hands-on laboratory activity where you will apply practical skills.</p>
            <h2>Objective</h2>
            <p>Define the learning objectives for this lab activity.</p>
            <h2>Materials Needed</h2>
            <ul style="margin-left: 20px; color: #333333;">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <h2>Procedure</h2>
            <p>Follow the step-by-step procedures outlined in the video below.</p>
            <div class="video-input-section">
                <h3>Add a YouTube Video</h3>
                <div class="form-group">
                    <label for="lab${i}Video">YouTube Video URL (or Video ID):</label>
                    <input type="text" id="lab${i}Video" placeholder="e.g., dQw4w9WgXcQ or https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                </div>
                <button class="btn" onclick="addVideo('lab${i}VideoContainer', 'lab${i}Video')">Add Video</button>
            </div>
            <div inal Exam - Topic ${i}`,
        content: `
            <h1>Final Exam Preparation - Topic ${i}</h1>
            <p>Review materials for the final examination on this topic.</p>
            <h2>Key Concepts</h2>
            <ul style="margin-left: 20px; color: #333333;">
                <li>Concept 1</li>
                <li>Concept 2</li>
                <li>Concept 3</li>
            </ul>
            <h2>Study Guide</h2>
            <p>Watch the video below for a comprehensive review of this topic.</p>
            <div class="video-input-section">
                <h3>Add a YouTube Video</h3>
                <div class="form-group">
                    <label for="final${i}Video">YouTube Video URL (or Video ID):</label>
                    <input type="text" id="final${i}Video" placeholder="e.g., dQw4w9WgXcQ or https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                </div>
                <button class="btn" onclick="addVideo('final${i}VideoContainer', 'final${i}Video')">Add Video</button>
            </div>
            <div id="final${i}VideoContainer"></div>
        `
    };
}

// Show page content
function showPage(pageId) {
    const page = pageData[pageId];
    if (page) {
// Toggle dropdown menu
function toggleDropdown(event, menuId) {
    event.preventDefault();
    const menu = document.getElementById(menuId);
    const toggle = event.target.closest('.dropdown-toggle');
    
    // Close other dropdowns
    document.querySelectorAll('.dropdown-menu.show').forEach(m => {
        if (m.id !== menuId) {
            m.classList.remove('show');
            document.querySelector(`[onclick*="${m.id}"]`).classList.remove('active');
        }
    });
    
    // Toggle current dropdown
    menu.classList.toggle('show');
    toggle.classList.toggle('active');
}

// Close all dropdowns
function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('show');
    });
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.classList.remove('active');
    });
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
        closeAllDropdowns();
    }
});

// Add YouTube video
function addVideo(containerId, inputId) {
    const input = document.getElementById(inputId);
    const container = document.getElementById(containerId);
    let videoId = input.value.trim();
    
    if (!videoId) {
        alert('Please enter a YouTube video URL or Video ID');
        return;
    }
    
    // Extract video ID from URL if needed
    if (videoId.includes('youtube.com') || videoId.includes('youtu.be')) {
        const url = new URL(videoId);
        if (videoId.includes('youtube.com')) {
            videoId = url.searchParams.get('v');
        } else if (videoId.includes('youtu.be')) {
            videoId = videoId.split('/').pop();
        }
    }
    
    if (!videoId) {
        alert('Invalid YouTube URL or Video ID');
        return;
    }
    
    // Create video container
    const videoHTML = `
        <div class="video-container">
            <iframe src="https://www.youtube.com/embed/${videoId}" 
                    allowfullscreen="" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    loading="lazy">
            </iframe>
        </div>
    `;
    
    container.innerHTML = videoHTML;
    input.value = '';
    
    // Show success message
    alert('Video added successfully!');
}

// Load home page on initial load
document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
});
