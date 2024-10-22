import { useState } from 'react';
import SkillsSection from '../components/skills/SkillsSection';
import CertificatesSection from '../components/skills/CertificatesSection';

const Skills = () => {
  const [activeSection, setActiveSection] = useState('skills');

  return (
    <section id='skills' className="min-h-screen bg-slate-950 text-white p-6">
      <div className='sticky top-10 z-10   w-full py-4 flex justify-center'>
        <div className="text-center my-8 ">
            <button
            onClick={() => setActiveSection('skills')}
            className={`px-4 py-2 mr-2 ${activeSection === 'skills' ? 'bg-cyan-500' : 'bg-white text-slate-900'} rounded-full`}>
            Skills
            </button>
            <button
            onClick={() => setActiveSection('certificates')}
            className={`px-4 py-2 ${activeSection === 'certificates' ? 'bg-cyan-500' : 'bg-white text-slate-900'} rounded-full`}>
            Certificates
            </button>
        </div>
      </div>

      <div>
        {activeSection === 'skills' && <SkillsSection />}
        {activeSection === 'certificates' && <CertificatesSection />}
      </div>
    </section>
  );
};

export default Skills;