import { useState, useEffect } from 'react';
import { FileText, ChevronRight, Clock, BookOpen, Award, Paperclip, Video, MessageSquare, User, Briefcase, Calendar, FileCheck, MessageCircle, X, Image, FileImage} from 'lucide-react';

export default function OJTPortfolio() {
  const [activeSection, setActiveSection] = useState('companyProfile');
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewportHeight, setViewportHeight] = useState('100vh');

  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(`${window.innerHeight}px`);
    };
    
    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);
    
    return () => {
      window.removeEventListener('resize', updateViewportHeight);
    };
  }, []);

  const sections = [
    { id: 'companyProfile', title: 'Company Profile', icon: <Briefcase size={18} /> },
    { id: 'department', title: 'Department Assignment', icon: <User size={18} /> },
    { id: 'weeklyActivities', title: 'Weekly Activities', icon: <Calendar size={18} /> },
    { id: 'concerns', title: 'Trainee Concerns', icon: <MessageCircle size={18} /> },
    { id: 'comments', title: 'Comments & Suggestions', icon: <MessageSquare size={18} /> },
    { id: 'hours', title: 'Estimated Hours', icon: <Clock size={18} /> },
    { id: 'reflection', title: 'Journey Reflection', icon: <BookOpen size={18} /> },
    { id: 'requirements', title: 'School Requirements', icon: <FileCheck size={18} /> },
    { id: 'appendix', title: 'Appendix', icon: <Paperclip size={18} /> },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'companyProfile':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Company Profile</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Sparksoft Solutions Inc.</h3>
              <p className="text-gray-700 mb-4">
                Software Development company offering web development, mobile applications and software solutions through a pool of experts.  
                  Driven with magis -- excellent and quality service -- SparkSoft uses cutting edge technologies to deliver the best software solutions.
              </p>
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2">At a Glance</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-md p-3">
                    <span className="text-gray-600 block">Industry</span>
                    <span className="font-medium">Software</span>
                  </div>
                  <div className="border rounded-md p-3">
                    <span className="text-gray-600 block">Location</span>
                    <span className="font-medium">Quezon City</span>
                  </div>
                  <div className="border rounded-md p-3">
                    <span className="text-gray-600 block">Founded</span>
                    <span className="font-medium">2011</span>
                  </div>
                  <div className="border rounded-md p-3">
                    <span className="text-gray-600 block">Website</span>
                    <span className="font-medium">sparksoft.com.ph</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'department':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Department/Division Assignment</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Department Name</h3>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Description</h4>
                <p className="text-gray-700">
                The Software Development Department creates and enhances digital solutions that support both internal operations and public-facing services for the Local Government Unit (LGU).
                </p>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Scope of Function</h4>
                <p className="text-gray-700">
                The department develops web systems and digital tools to improve efficiency and service delivery for both internal and external users. It also integrates external solutions like WordPress plugins to optimize system functionality.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Your Duties & Responsibilities</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  <li className="mb-2"><span className="font-semibold">UI/UX Research:</span> Identified usability issues in existing web systems and proposed design improvements.</li>
                  <li className="mb-2"><span className="font-semibold">Design Proposals:</span> Created design layouts and visual elements using Figma to enhance clarity, accessibility, and navigation.</li>
                  <li className="mb-2"><span className="font-semibold">Usability Testing:</span> Tested design prototypes to ensure a seamless user experience.</li>
                  <li className="mb-2"><span className="font-semibold">WordPress Plugin Management:</span> Installed and tested WordPress plugins for enhanced system functionality.</li>
                  <li className="mb-2"><span className="font-semibold">Collaboration & Mentorship:</span> Worked under the guidance of Mr. Lagunsad and Mr. Glenn to learn front-end development best practices.</li>
                </ul>
              </div>
            </div>
          </div>
        );
        case 'weeklyActivities':
          // Sample data structure - you can replace this with your actual data
          const weeklyData = [
            {
              weekNumber: 1,
              days: [
                { label: "Monday", description: "Orientation and company introduction" },
                { label: "Tuesday", description: "Set up local WordPress development environment and basic tool installation." },
                { label: "Wednesday", description: "Introduction to WordPress plugin system and initial exploration of key plugins." },
                { label: "Thursday", description: "Installed and configured initial set of plugins on a test site." },
                { label: "Friday", description: "Documented plugin setup steps and shared findings with the team." }
              ],
              highlights: "Successfully set up the development environment and gained an understanding of WordPress plugin architecture."
            },
            {
              weekNumber: 2,
              days: [
                { label: "Monday", description: "Learned best practices for plugin testing." },
                { label: "Tuesday", description: "Began structured testing of SEO-related plugins." },
                { label: "Wednesday", description: "Tested compatibility between multiple plugins and themes." },
                { label: "Thursday", description: "Started creating basic wireframes in Figma for a sample web layout." },
                { label: "Friday", description: "Presented initial wireframes and received feedback from the design team." }
              ],
              highlights: "Completed first plugin testing cycle and created my first wireframe draft in Figma."
            },
            {
              weekNumber: 3,
              days: [
                { label: "Monday", description: "Focused on security plugin testing and identified configuration gaps." },
                { label: "Tuesday", description: "Continued testing and documented potential vulnerabilities." },
                { label: "Wednesday", description: "Worked on refining wireframes for mobile responsiveness." },
                { label: "Thursday", description: "Integrated new design feedback into Figma wireframes." },
                { label: "Friday", description: "Participated in a design review session with the team." }
              ],
              highlights: "Improved my knowledge of WordPress security and made significant progress on responsive wireframes."
            },
            {
              weekNumber: 4,
              days: [
                { label: "Monday", description: "Tested performance-enhancing plugins." },
                { label: "Tuesday", description: "Compared site performance before and after optimization." },
                { label: "Wednesday", description: "Created additional wireframes for contact forms and user interaction flows." },
                { label: "Thursday", description: "Reviewed and improved existing wireframes based on UX best practices." },
                { label: "Friday", description: "Compiled plugin performance test results for team review." }
              ],
              highlights: "Learned how optimization plugins impact site performance and enhanced my wireframe designs with advanced components."
            },
            {
              weekNumber: 5,
              days: [
                { label: "Monday", description: "Focused on backup and migration plugin testing." },
                { label: "Tuesday", description: "Simulated backup and restore scenarios in WordPress." },
                { label: "Wednesday", description: "Refined Figma prototypes, adding interactive elements." },
                { label: "Thursday", description: "Tested multi-plugin setups for potential conflicts." },
                { label: "Friday", description: "Presented updated wireframes and plugin testing reports." }
              ],
              highlights: "Successfully completed complex plugin tests and elevated my design prototypes with interactivity."
            }
          ];
        
          return (
            <div>
              <h2 className="text-2xl font-bold mb-4">Summary of Weekly Activities</h2>
              <div className="space-y-4">
                {weeklyData.map((week) => (
                  <div key={week.weekNumber} className="bg-white p-5 rounded-lg shadow-sm">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-600 text-white font-semibold text-xs px-3 py-1 rounded-full">
                        Week {week.weekNumber}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Week {week.weekNumber} Activities</h3>
                    <div className="space-y-3">
                      {week.days.map((day, dayIndex) => (
                        <div key={dayIndex} className="border-l-4 border-blue-500 pl-3 py-1">
                          <p className="font-medium">{day.label}</p>
                          <p className="text-gray-700 text-sm">{day.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t">
                      <p className="text-sm text-gray-600 font-medium">Weekly Highlights:</p>
                      <p className="text-sm text-gray-700">{week.highlights}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
      case 'concerns':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">OJT-Trainee Concerns</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Things Learned During the OJT</h3>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-semibold text-lg mb-2">Technical Skills</h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li className="mb-2">Installed, configured, and tested various plugins to ensure functionality and compatibility.</li>
                    <li className="mb-2">Created responsive wireframes and prototypes for web layouts and user flows.</li>
                    <li className="mb-2">Diagnosed and resolved plugin conflicts and performance issues effectively.</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-semibold text-lg mb-2">Soft Skills</h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li className="mb-2">Presented progress updates and collaborated smoothly with team members.</li>
                    <li className="mb-2">Balanced multiple tasks to meet deadlines consistently.</li>
                    <li className="mb-2">Quickly learned new tools and adjusted to shifting project priorities.</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-semibold text-lg mb-2">Industry Knowledge</h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li className="mb-2">Understood the role of plugins in improving site speed and SEO.</li>
                    <li className="mb-2">Learned the basics of user-focused design through wireframing and prototyping.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case 'comments':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Overall Comments, Suggestions & Recommendations</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Strengths of the OJT Program</h3>
                <p className="text-gray-700 mb-3">
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li className="mb-2">The program provided practical tasks that allowed me to apply and enhance my technical skills in real-world scenarios.</li>
                  <li className="mb-2">Team members were approachable and offered helpful guidance and feedback throughout the training.</li>
                  <li className="mb-2">I gained experience with both WordPress and Figma, which broadened my skill set and understanding of web development and design.</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Areas for Improvement</h3>
                <p className="text-gray-700 mb-3">
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li className="mb-2">Feedback was valuable but could have been more frequent to track progress more closely.</li>
                  <li className="mb-2">Involvement in more diverse projects or phases (like deployment) would have provided a fuller understanding of workflows.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Recommendations</h3>
                <p className="text-gray-700 mb-3">
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li className="mb-2">Include exposure to other aspects of the business (e.g., client interaction, full project lifecycle) to give trainees a holistic view.</li>
                  <li className="mb-2">Schedule regular one-on-one check-ins to offer personalized feedback and mentorship.</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'hours':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Estimated Number of Hours</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Clock size={28} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-lg font-medium">Total Estimated Hours</p>
                  <p className="text-3xl font-bold text-blue-600">400 Hours</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
              I estimate that I accumulated between 400-500 hours during my OJT, covering tasks such as WordPress plugin testing and installation, 
             wireframing in Figma, and attending meetings.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-semibold text-lg mb-3">Hours Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Regular Tasks</span>
                    <span className="font-semibold">290 hours</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Meetings & Consultations</span>
                    <span className="font-semibold">60 hours</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Special Projects</span>
                    <span className="font-semibold">50 hours</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-medium text-lg">Total Hours</span>
                    <span className="font-bold text-lg">400 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        case 'reflection':
          return (
            <div>
              <h2 className="text-2xl font-bold mb-4">My BSIT Internship Journey Reflection</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-6 border-l-4 border-blue-500 pl-4 italic text-gray-600">
                  "Reflection is looking back so that the view looking forward is even clearer." — Unknown
                </div>
        
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    My BSIT internship at <span className="font-semibold">Sparksoft Solutions Inc.</span> was a valuable and eye opening experience that allowed me to apply my academic knowledge in a real world setting. I worked on tasks such as testing and installing WordPress plugins, creating wireframes in Figma, and contributing to documentation and template creation.
                  </p>
        
                  <p className="mb-4">
                    Although I faced challenges at first, especially with new tools and adapting to a professional environment, I gradually built confidence and improved through guidance from my mentors and collaboration with the team. This experience not only strengthened my technical skills but also helped me develop soft skills like communication, teamwork, and problem solving.
                  </p>
        
                  <p>
                    Overall, my internship has given me a clearer understanding of my career path, reinforced my interest in web development and design, and prepared me for the next steps in my IT journey. I am grateful for the opportunity and the growth it provided, and I look forward to using these experiences as a strong foundation for my future career.
                  </p>
                </div>
              </div>
            </div>
          );
        
        case 'requirements':
          // This is a standard render without any React hooks
          // We'll use a different approach for the modal functionality
          return (
            <div>
  <h2 className="text-2xl font-bold mb-4">School Requirements</h2>
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Endorsement Letter */}
      <div 
        className="border rounded-md p-4 flex items-center cursor-pointer hover:bg-gray-50"
        onClick={() => window.openRequirementModal('endorsement')}
      >
        <div className="mr-3 text-blue-600">
          <FileText size={24} />
        </div>
        <div>
          <h3 className="font-semibold">Endorsement Letter</h3>
          <p className="text-sm text-gray-600">Status: Submitted</p>
          <p className="text-xs text-blue-600 mt-1">Click to view document</p>
        </div>
      </div>
      
      {/* Confirmation Letter */}
      <div 
        className="border rounded-md p-4 flex items-center cursor-pointer hover:bg-gray-50"
        onClick={() => window.openRequirementModal('confirmation')}
      >
        <div className="mr-3 text-blue-600">
          <FileText size={24} />
        </div>
        <div>
          <h3 className="font-semibold">Confirmation Letter</h3>
          <p className="text-sm text-gray-600">Status: Submitted</p>
          <p className="text-xs text-blue-600 mt-1">Click to view document</p>
        </div>
      </div>
      
      {/* Deed of Undertaking */}
      <div 
        className="border rounded-md p-4 flex items-center cursor-pointer hover:bg-gray-50"
        onClick={() => window.openRequirementModal('dou')}
      >
        <div className="mr-3 text-blue-600">
          <FileText size={24} />
        </div>
        <div>
          <h3 className="font-semibold">Deed of Undertaking (DOU) / Waiver</h3>
          <p className="text-sm text-gray-600">Status: Submitted</p>
          <p className="text-xs text-blue-600 mt-1">Click to view document</p>
        </div>
      </div>
      
      {/* Affidavit of Extension */}
      <div className="border rounded-md p-4 flex items-center">
        <div className="mr-3 text-gray-400">
          <FileText size={24} />
        </div>
        <div>
          <h3 className="font-semibold">Affidavit of Extension</h3>
          <p className="text-sm text-gray-600">Status: Not Applicable</p>
        </div>
      </div>
      
      {/* Certificate of Completion */}
      <div 
        className="border rounded-md p-4 flex items-center cursor-pointer hover:bg-gray-50"
        onClick={() => window.openRequirementModal('certificate')}
      >
        <div className="mr-3 text-blue-600">
          <Award size={24} />
        </div>
        <div>
          <h3 className="font-semibold">Certificate of Completion</h3>
          <p className="text-sm text-gray-600">With rendered hours: 400 hours</p>
          <p className="text-xs text-blue-600 mt-1">Click to view document</p>
        </div>
      </div>
    </div>
    
    <div className="mt-6">
      <p className="text-sm text-gray-600">
        Note: All documents are attached in the PDF version of this portfolio.
      </p>
    </div>
  </div>

  {/* Modal markup for PDF preview */}
  <div id="requirements-modal" className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 hidden">
    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
      <div className="flex justify-between items-center p-4 border-b">
        <h3 className="font-semibold text-lg" id="modal-title">Document Preview</h3>
        <button 
          onClick={() => document.getElementById('requirements-modal').classList.add('hidden')}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <X size={24} />
        </button>
      </div>
      
      <div className="p-4 overflow-auto flex-1">
        <div id="modal-content" className="bg-gray-100 p-4 rounded flex flex-col items-center">
          <embed 
            id="modal-pdf"
            src="/api/placeholder.pdf" 
            type="application/pdf"
            className="w-full h-[70vh] border shadow-sm"
          />
          <p className="text-sm text-gray-500 mt-2" id="modal-description">
            Document Preview
          </p>
        </div>
      </div>
      
      <div className="p-4 border-t flex justify-end">
        <button
          onClick={() => document.getElementById('requirements-modal').classList.add('hidden')}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  </div>

  {/* Script to handle modal functionality with PDF */}
  <script dangerouslySetInnerHTML={{ __html: 
    window.openRequirementModal = function(docType) {
      const modal = document.getElementById('requirements-modal');
      const modalTitle = document.getElementById('modal-title');
      const modalPdf = document.getElementById('modal-pdf');
      const modalDescription = document.getElementById('modal-description');
      
      switch(docType) {
        case 'endorsement':
          modalTitle.textContent = 'Endorsement Letter';
          modalPdf.src = '/public/JustineCabreros_Endorsement Letter.pdf'; // Replace with actual PDF path
          modalDescription.textContent = 'PDF Preview - Endorsement Letter';
          break;
        case 'confirmation':
          modalTitle.textContent = 'Confirmation Letter';
          modalPdf.src = '/public/JustineCabreros_Confirmation Letter.pdf'; // Replace with actual PDF path
          modalDescription.textContent = 'PDF Preview - Confirmation Letter';
          break;
        case 'dou':
          modalTitle.textContent = 'Deed of Undertaking (DOU) / Waiver';
          modalPdf.src = '/public/JustineCabreros_UDLRW.pdf'; // Replace with actual PDF path
          modalDescription.textContent = 'PDF Preview - Deed of Undertaking';
          break;
        case 'certificate':
          modalTitle.textContent = 'Certificate of Completion';
          modalPdf.src = '/public/JustineCabreros_COC.pdf'; // Replace with actual PDF path
          modalDescription.textContent = 'Certificate of Completion - 400 hours';
          break;
      }
      
      // Show the modal
      modal.classList.remove('hidden');
    }
  }} />
</div>
          );
          case 'appendix':
            return (
              <div>
                <h2 className="text-2xl font-bold mb-4">Appendix</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <Video size={20} className="mr-2" />
                      Media Showcase
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Project Showcase Item 1 */}
                      <div className="bg-gray-50 rounded-md overflow-hidden border border-gray-200">
                        <div className="h-48 bg-gray-200 relative flex items-center justify-center">
                          <img src="/public/intern.webp" alt="Team collaboration session" className="w-full h-full object-cover" />
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2">
                            <p className="text-white text-sm">HR Orientation</p>
                          </div>
                        </div>
                        <div className="p-3">
                          <h4 className="font-medium">HR Orientation</h4>
                          <p className="text-sm text-gray-600">Overview of company policies, work schedule, and internship expectations.</p>
                        </div>
                      </div>
                      
                      {/* Project Showcase Item 2 */}
                      <div className="bg-gray-50 rounded-md overflow-hidden border border-gray-200">
                        <div className="h-48 bg-gray-200 relative flex items-center justify-center">
                          <img src="/public/onboarding.webp" alt="Project presentation" className="w-full h-full object-cover" />
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2">
                            <p className="text-white text-sm">Department Orientation</p>
                          </div>
                        </div>
                        <div className="p-3">
                          <h4 className="font-medium">Department Orientation</h4>
                          <p className="text-sm text-gray-600">Introduction to department workflows, tools, and team communication.</p>
                        </div>
                      </div>
                      
                      {/* Project Showcase Item 3 */}
                      <div className="bg-gray-50 rounded-md overflow-hidden border border-gray-200">
                        <div className="h-48 bg-gray-200 relative flex items-center justify-center">
                          <img src="/public/discuss.webp" alt="Workshop session" className="w-full h-full object-cover" />
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2">
                            <p className="text-white text-sm">First Team Meeting</p>
                          </div>
                        </div>
                        <div className="p-3">
                          <h4 className="font-medium">First Team Meeting</h4>
                          <p className="text-sm text-gray-600">Initial virtual collaboration with department leads to align on goals</p>
                        </div>
                      </div>
                      
                      {/* Project Showcase Item 4 */}
                      <div className="bg-gray-50 rounded-md overflow-hidden border border-gray-200">
                        <div className="h-48 bg-gray-200 relative flex items-center justify-center">
                          <img src="/meeting.webp" alt="Final project" className="w-full h-full object-cover" />
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2">
                            <p className="text-white text-sm">Presentation of Tasks with Mentors</p>
                          </div>
                        </div>
                        <div className="p-3">
                          <h4 className="font-medium">Presentation of Tasks with Mentors</h4>
                          <p className="text-sm text-gray-600">Mentor-guided review of assigned tasks and project objectives.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            );
      default:
        return (
          <div className="text-center p-10">
            <p>Select a section from the sidebar to view content</p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col" style={{ height: viewportHeight }}>
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md flex-shrink-0">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <FileText className="mr-2" size={24} />
            <h1 className="text-xl font-bold">OJT Digital Portfolio</h1>
          </div>
          <div className="hidden md:block">
            <p className="text-sm"></p>
          </div>
          <button 
            className="md:hidden bg-blue-700 p-2 rounded"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <ChevronRight size={20} className={`transform transition-transform ${menuOpen ? 'rotate-90' : ''}`} />
          </button>
        </div>
      </header>

      {/* Main Content Area with Sidebar and Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Overlay for mobile when sidebar is open */}
        {menuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
            onClick={toggleMenu}
            aria-hidden="true"
          />
        )}
        
        {/* Sidebar */}
        <aside 
          className={`bg-white w-64 md:w-72 shadow-lg flex-shrink-0 transition-all duration-300 transform ${
            menuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          } fixed md:relative h-full z-20 overflow-y-auto`}
          style={{ maxHeight: `calc(${viewportHeight} - 4rem - 2rem)` }} // Subtract header and footer heights
        >
          <div className="p-4 border-b sticky top-0 bg-white z-10">
            <div className="flex items-center justify-center p-2 bg-blue-50 rounded-lg">
              <img 
                src="/public/2x2.jpg" 
                alt="Student" 
                className="w-16 h-16 rounded-full border-2 border-blue-500 object-cover" 
              />
            </div>
            <div className="text-center mt-2">
              <p className="font-bold text-lg">Justine Cabreros</p>
              <p className="text-sm text-gray-600">Assistant Software Developer</p>
            </div>
          </div>

          <nav className="p-4">
            <ul className="space-y-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => {
                      setActiveSection(section.id);
                      if (window.innerWidth < 768) {
                        setMenuOpen(false);
                      }
                    }}
                  >
                    <span className="mr-2">{section.icon}</span>
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content - Made Explicitly Scrollable */}
        <main 
          className="flex-1 p-4 md:p-6 overflow-y-auto"
          style={{ maxHeight: `calc(${viewportHeight} - 4rem - 3rem)` }} // Subtract header and footer heights
        >
          <div className="container mx-auto pb-8">
            {renderContent()}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-3 text-center text-sm flex-shrink-0">
        <p>© {new Date().getFullYear()} - OJT Digital Portfolio | BSIT Program</p>
      </footer>
    </div>
  );
}