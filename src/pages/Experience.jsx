import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {FaReact} from "react-icons/fa";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function Experience() {
    return (
        <> < Navbar /> <div className="wrapper">
            <h1>Experience</h1>

            <VerticalTimeline>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2021 - 2022"
                    iconStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff'
                    }}
                    icon={<FaReact />}>
                    <h3 className="vertical-timeline-element-title">HIMA Information system</h3>
                    <h4 className="vertical-timeline-element-subtitle">koordinator Humas</h4>
                    <p>The coordinator is responsible for building and developing a positive image
                        within the university and outside the university</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2021 - 2022"
                    iconStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff'
                    }}
                    icon={<FaReact />}>
                    <h3 className="vertical-timeline-element-title">IMSII Ikatan Mahasiswa Seluruh Indonesia
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">koordinator luar negeri</h4>
                    <p>The coordinator is responsible for building and developing a positive image
                        in East Java, Bali, and NTT.</p>

                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2022 - 2023"
                    iconStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff'
                    }}
                    icon={<FaReact />}>
                    <h3 className="vertical-timeline-element-title">BEM UNIVERSITY</h3>
                    <h4 className="vertical-timeline-element-subtitle">Secretary of State</h4>
                    <p>A ministry that builds and develops a positive image of the Student Executive
                        Board (BEM) both within and outside the university.</p>

                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2022"
                    iconStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff'
                    }}
                    icon={<FaReact />}>
                    <h3 className="vertical-timeline-element-title">Binar Academy</h3>
                    <h4 className="vertical-timeline-element-subtitle">FrontEnd Javascript</h4>
                    <p>learn react js beginner and work on projects from binary Academy.</p>

                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2022"
                    iconStyle={{
                        background: 'rgb(33, 150, 243)',
                        color: '#fff'
                    }}
                    icon={<FaReact />}>
                    <h3 className="vertical-timeline-element-title">Business Development
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">StartUp EQUIPERP</h4>
                    <p>Conducting market research and market analysis Finding new business, opportunities Maintaining relationships with existing and new clients Drafting.</p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div> < Footer /> <ScrollToTop/>
    </>
    )
}

export default Experience