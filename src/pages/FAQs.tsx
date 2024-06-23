import React, { useState } from 'react';

type FAQsProps = {};

const FAQs: React.FC<FAQsProps> = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const handleQuestionSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedQuestion(event.target.value);
  };

  const generateRandomAnswer = () => {
    const answers: Record<string, string> = {
      "What is ACM SIGCHI?": "ACM SIGCHI is the Association for Computing Machinery's Special Interest Group on Computer-Human Interaction, focused on advancing the field of HCI through conferences, publications, and community activities.",
      "What are the main conferences organized by ACM SIGCHI?": "ACM SIGCHI organizes several major conferences, including CHI (Conference on Human Factors in Computing Systems), CSCW (Computer-Supported Cooperative Work), and UIST (User Interface Software and Technology).",
      "How can I submit a paper to a SIGCHI conference?": "Paper submissions typically require adherence to specific formatting guidelines provided by the conference. Submissions are peer-reviewed and must be done through the conference's submission system.",
      "What is the role of a SIGCHI Local Chapter?": "SIGCHI Local Chapters aim to foster HCI communities locally by organizing events, workshops, and discussions on relevant topics in HCI.",
      "How can I join a SIGCHI Local Chapter?": "You can join a SIGCHI Local Chapter by finding the chapter nearest to you on the SIGCHI website and contacting them for membership details.",
      "What resources does ACM SIGCHI provide for students?": "ACM SIGCHI provides various resources for students, including conferences, workshops, student research competitions, and mentorship programs.",
      "How can I volunteer for a SIGCHI event?": "Volunteering opportunities for SIGCHI events are usually announced on the event's website. You can apply by filling out the volunteer form provided by the event organizers.",
      "What is the SIGCHI Career Development Fund?": "The SIGCHI Career Development Fund supports individuals who are early in their HCI careers, providing funding for conference travel, research activities, and professional development.",
      "How does SIGCHI support diversity and inclusion?": "SIGCHI supports diversity and inclusion through various initiatives, such as the SIGCHI Development Fund, which provides financial support to underrepresented groups to attend conferences and workshops.",
      "What are SIGCHI's special interest groups?": "SIGCHI's special interest groups focus on specific areas within HCI, such as user experience, interaction design, and accessibility. These groups organize their own events and activities."
    };

    return answers[selectedQuestion as string] || "Select a question to see the answer.";
  };

  return (
    <div className="py-8 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">FAQs</h1>
        <div className="flex justify-center mb-8">
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg w-full md:w-96 focus:outline-none"
            onChange={handleQuestionSelect}
            value={selectedQuestion || ""}
          >
            <option value="">Select a question</option>
            <option value="What is ACM SIGCHI?">What is ACM SIGCHI?</option>
            <option value="What are the main conferences organized by ACM SIGCHI?">What are the main conferences organized by ACM SIGCHI?</option>
            <option value="How can I submit a paper to a SIGCHI conference?">How can I submit a paper to a SIGCHI conference?</option>
            <option value="What is the role of a SIGCHI Local Chapter?">What is the role of a SIGCHI Local Chapter?</option>
            <option value="How can I join a SIGCHI Local Chapter?">How can I join a SIGCHI Local Chapter?</option>
            <option value="What resources does ACM SIGCHI provide for students?">What resources does ACM SIGCHI provide for students?</option>
            <option value="How can I volunteer for a SIGCHI event?">How can I volunteer for a SIGCHI event?</option>
            <option value="What is the SIGCHI Career Development Fund?">What is the SIGCHI Career Development Fund?</option>
            <option value="How does SIGCHI support diversity and inclusion?">How does SIGCHI support diversity and inclusion?</option>
            <option value="What are SIGCHI's special interest groups?">What are SIGCHI's special interest groups?</option>
          </select>
        </div>
        <div className="text-lg text-center bg-white rounded-lg shadow-lg p-6">
          {selectedQuestion && (
            <>
              <h2 className="font-semibold mb-4">{selectedQuestion}</h2>
              <p>{generateRandomAnswer()}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
