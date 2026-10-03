import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import MemberDialog from "../components/MemberDialog";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import SEO from "../components/SEO";
import { useLanguage } from "../context/LanguageContext";

const boardMembers = [
    {
        id: "gurselGecir",
        name: "Gürsel Gecir",
        role: "president",
        department: "electricalElectronicsEng",
        email: "gursel.gecir@ogr.sakarya.edu.tr",
        img: true,
        bio: "gursel.gecir@ogr.sakarya.edu.tr"
    },
    {
        id: "beratKaanAydin",
        name: "Berat Kaan Aydın",
        role: "vicePresident",
        department: "electricalElectronicsEng",
        email: "berat.aydin@infoseis.com",
        img: true,
        bio: "berat.aydin@infoseis.com"
    },
    {
        id: "mehmetZahidGorgec",
        name: "Mehmet Zahid Görgeç",
        role: "itCoordinator",
        department: "computerEng",
        email: "mehmetzahidgorgec@gmail.com",
        img: true,
        bio: "mehmetzahidgorgec@gmail.com"
    },
    {
        id: "ensarDavut",
        name: "Ensar Davud",
        role: "founderAndSupervisoryBoardMember",
        department: "electricalElectronicsEng",
        email: "ensar.davud@ogr.sakarya.edu.tr",
        img: true,
        bio: "ensar.davud@ogr.sakarya.edu.tr"
    },
    {
        id: "zeynepCenik",
        name: "Zeynep Cenik",
        role: "directorOfPublicRelationsAndMarketing",
        department: "chemistry",
        email: "zeynepcenik06@gmail.com",
        img: true,
        bio: "zeynepcenik06@gmail.com"
    },
    {
        id: "nurcinVatansever",
        name: "Nurçin Vatansever",
        role: "departmentOfServicesAndEventCoordinator",
        department: "industryEng",
        email: "nurcinzeynep5@gmail.com",
        img: true,
        bio: "nurcinzeynep5@gmail.com"
    },
    {
        id: "bilgehanYetkin",
        name: "Bilgehan Yetkin",
        role: "fund",
        department: "informationSystemsEng",
        email: "xyz@gmail.com",
        img: true,
        bio: "xyz@gmail.com"
    },

];

export default function Board() {
    useRevealOnScroll();
    const [selectedMember, setSelectedMember] = useState(null);
    const { t } = useLanguage();

    const openMemberDetails = (member) => {
        setSelectedMember({
            ...member,
            about: t(`board.members.${member.id}.about`),
            department: t(`departments.${member.department}`)
        });
    };

    const closeMemberDetails = () => {
        setSelectedMember(null);
    };

    return (
        <div>
            <SEO
                title={t('seo.board.title')}
                description={t('seo.board.description')}
                keywords={t('seo.board.keywords')}
            />
            <PageHeader
                title={t('board.title')}
                description={t('board.description')}
            />

            <Section id="board" title={t('board.title')}>
                <div className="card-grid" style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Reduced min-width to fit 5 items
                    gap: '1.5rem' // Reduced gap to help fit items
                }}>
                    {boardMembers.map((member, index) => (
                        <div
                            key={index}
                            className="card board-card clickable-card"
                            data-reveal
                            onClick={() => openMemberDetails(member)}
                            style={{
                                textAlign: 'center',
                                padding: '2rem 1rem', // Reduced padding
                                border: '1px solid #bfdbfe',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                height: '100%'
                            }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                                <div style={{
                                    width: '120px', // Slightly smaller image to fit better
                                    height: '120px',
                                    borderRadius: '50%',
                                    backgroundColor: '#e0f2fe',
                                    margin: '0 auto 1rem',
                                    overflow: 'hidden',
                                    border: '3px solid #fff',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                    position: 'relative'
                                }}>
                                    {member.img ? (
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
                                        color: '#0056b3',
                                        fontSize: '2.5rem',
                                        fontWeight: 'bold',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        backgroundColor: '#e0f2fe',
                                        zIndex: -1
                                    }}>
                                        {member.name.charAt(0)}
                                    </div>
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#1e40af' }}>{member.name}</h3>
                                <p style={{ fontWeight: 'bold', color: '#0056b3', marginBottom: '0.5rem', fontSize: '1rem' }}>{t(`board.roles.${member.role}`)}</p>
                            </div>
                            <p style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '400', marginTop: '1rem' }}>{t('board.clickInfo')}</p>
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
