import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const cardsData = [
    {
        title: 'Developers and Tech Enthusiasts',
        description: 'Streamline project workflows, collaborate seamlessly with team members, and manage coding tasks efficiently.',
    },
    {
        title: 'Corporate Professionals',
        description: 'Organize meetings, agendas, and follow-ups effortlessly. Track project progress and team contributions. Enhance overall productivity with streamlined task management.',
    },
    {
        title: 'Bankers and Finance Experts',
        description: 'Monitor financial tasks and deadlines, collaborate securely on sensitive financial projects, and ensure compliance and audit readiness.',
    },
    {
        title: 'Entrepreneurs and Startups',
        description: 'Manage tasks related to product development, marketing, and operations. Foster collaboration among team members. Achieve milestones with a structured task management approach.',
    },
    {
        title: 'Freelancers and Creatives',
        description: 'Keep track of client projects and deadlines. Showcase your creative workflow in an organized manner. Efficiently manage multiple projects simultaneously.',
    },
    {
        title: 'Students and Educators',
        description: 'Organize coursework, assignments, and group projects. Facilitate collaboration among students on group assignments. Stay on top of academic deadlines and responsibilities.',
    },
    {
        title: 'Healthcare Professionals',
        description: 'Coordinate patient care plans and medical projects. Collaborate securely on sensitive healthcare initiatives. Ensure compliance with healthcare regulations.',
    },
    {
        title: 'Event Planners and Marketing Teams',
        description: 'Plan and execute events seamlessly. Coordinate marketing campaigns with clear task assignments. Ensure timely execution of promotional activities.',
    },
    {
        title: 'Non-Profit Organizations',
        description: 'Manage tasks related to fundraising, events, and outreach. Foster collaboration among team members and volunteers. Maximize impact by staying organized and focused on mission-driven tasks.',
    },
];

const Card = ({ title, description }) => (
    <div className=" w-full rounded-2xl overflow-hidden shadow mx-auto bg-gray-300  bg-opacity-20 " data-aos="flip-left">
        <div className="px-6 py-4">
            <div className="font-mono text-xl mb-2 leading-[2.75rem]">{title}</div>
            <p className="text-gray-700 text-base leading-7">{description}</p>
            <div>
            <button className="py-0 mt-4 px-3 md:py-3 md:px-5 lg:py-2 lg:px-6 text-xs md:text-sm lg:text-base bg-gradient-to-l from-[#924AEF] to-[#A827E4] font-bold rounded-md "> Details </button>
            </div>
        </div> 
    </div>
);

const TeamSection = () => {




    useEffect(() => {
        AOS.init({ duration: 3000 })
    }, [])



    return (
        <div className="min-h-screen p-8 font-poppins max-w-[1400px] mx-auto">
            <div className="grid-lines"></div>
            <div>
                <h1 className="text-3xl font-medium mb-8 text-center">Discover Who Benefits Most</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5" >
                    {cardsData.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;