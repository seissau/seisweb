import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import MemberDialog from "../components/MemberDialog";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import SEO from "../components/SEO";
import { useLanguage } from "../context/LanguageContext";

const teamMembers = [
    {
        id: "aytekAksu",
        name: "Aytek Aksu",
        role: "Web Development Responsible",
        department: "softwareEng",
        email: "aytek.aksu1@gmail.com",
    },
    {
        id: "tunaKaradeniz",
        name: "Tuna Karadeniz",
        role: "Technical Systems Responsible",
        department: "computerEng",
        email: "tunakrdnz06@gmail.com",
    },
    {
        id: "yunusEmreSevindik",
        name: "Yunus Emre Sevindik",
        role: "Mobile Development Responsible",
        department: "computerEng",
        email: "Yunus.sevindik@ogr.sakarya.edu.tr",
    },
    {
        id: "yildirayAliKara",
        name: "Yıldıray Ali Kara",
        role: "Innovation & Project Development Responsible",
        department: "computerEng",
        email: "yildirayalikara606@gmail.com",
    },
    {
        id: "yagmurKarakaya",
        name: "Yağmur Karakaya",
        role: "Social Media Executive",
        department: "chemistry",
        email: "yagmurkarakaya773@gmail.com",
    },
    {
        id: "muhammetYildiran",
        name: "Muhammet Yıldıran",
        role: "Social Media Executive",
        department: "dataScienceAndAnalytics",
        email: "myildiran964@gmail.com",
    },
    {
        id: "azraAytan",
        name: "Azra Aytan",
        role: "Design & Visual Identity Responsible",
        department: "cyberSecurityEng",
        email: "azraaytan0@gmail.com",
    },
    {
        id: "betulBozkurt",
        name: "Betül Bozkurt",
        role: "Marketing & Growth Responsible",
        department: "cyberSecurityEng",
        email: "betulbozkurt656@gmail.com",
    },
    {
        id: "eslemYilman",
        name: "Eslem Yılman",
        role: "Event Planning & Program Team",
        department: "economy",
        email: "eslemyilman23@gmail.com",
    },
    {
        id: "yagmurAktas",
        name: "Yağmur Aktaş",
        role: "Operations & Coordination Team",
        department: "translation",
        email: "suncalypse@gmail.com",
    },
    {
        id: "emreTurk",
        name: "Emre Türk",
        role: "Logistics & Venue Responsible",
        department: "computerEng",
        email: "emre.turk@infoseis.com",
    },
    {
        id: "zeynepEzgiSelvi",
        name: "Zeynep Ezgi Selvi",
        role: "Membership Recruitment Officer & Internal Communications Coordinator",
        department: "materialsAndMetallurgyEng",
        email: "Ezgiselvi2007@outlook.com",
    },
    {
        id: "ceylinDidemGulsen",
        name: "Ceylin Didem Gülşen",
        role: "Reporting and Documentation Officer",
        department: "dataScienceAndAnalytics",
        email: "ceylindidemgg@gmail.com",
    },
    {
        id: "iremTarin",
        name: "İrem Tarin",
        role: "Disciplinary Process Specialist",
        department: "industryEng",
        email: "tarinirem549@gmail.com",
    },
    {
        id: "busranurKokturk",
        name: "Büşranur Köktürk",
        role: "External Relations Specialist",
        department: "translation",
        email: "kokturkbusranur@gmail.com",
    },
    {
        id: "elifsuEroglu",
        name: "Elifsu Eroğlu",
        role: "External Relations & Corporate Communication",
        department: "chemistry",
        email: "mailelifsueroglu@gmail.com",
    },
    {
        id: "ardaKaynak",
        name: "Arda Kaynak",
        role: "Fundraising Team",
        department: "mechanicalEng",
        email: "kynk.arda16@gmail.com",
    },
];

export default function Team() {
    useRevealOnScroll();
    const [selectedMember, setSelectedMember] = useState(null);
    const { t } = useLanguage();

    const openMemberDetails = (member) => {
        setSelectedMember({
            ...member,
            about: t(`team.members.${member.id}.about`),
            department: t(`departments.${member.department}`)
        });
    };

    const closeMemberDetails = () => {
        setSelectedMember(null);
    };

    return (
        <div>
            <SEO
                title={t('seo.team.title')}
                description={t('seo.team.description')}
                keywords={t('seo.team.keywords')}
            />
            <PageHeader
                title={t('team.title')}
                description={t('team.description')}
            />

            <Section id="team-members" title={t('team.sectionTitle')}>
                <div className="card-grid" style={{
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="card team-card clickable-card"
                            data-reveal
                            onClick={() => openMemberDetails(member)}
                            style={{
                                textAlign: 'center',
                                padding: '1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                height: '100%'
                            }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    backgroundColor: '#f1f5f9',
                                    marginBottom: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#94a3b8',
                                    fontSize: '1.5rem',
                                    fontWeight: '600',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}>
                                    {true ? ( // Always try to load image
                                        <img
                                            src={`/members/${member.id}.jpeg`}
                                            alt={member.name}
                                            onError={(e) => {
                                                if (e.target.src.endsWith('.jpeg')) {
                                                    e.target.src = e.target.src.replace('.jpeg', '.jpg');
                                                } else {
                                                    e.target.onerror = null;
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }
                                            }}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            loading="lazy"
                                        />
                                    ) : null}
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#94a3b8',
                                        fontSize: '1.5rem',
                                        fontWeight: '600',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        backgroundColor: '#f1f5f9',
                                        zIndex: -1
                                    }}>
                                        {member.name.charAt(0)}
                                    </div>
                                </div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: '#334155' }}>{member.name}</h4>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>{member.role}</p>
                            </div>
                            <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '1rem', fontWeight: '400' }}>{t('team.clickInfo')}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <MemberDialog
                member={selectedMember}
                isOpen={!!selectedMember}
                onClose={closeMemberDetails}
            />
        </div>
    );
}
