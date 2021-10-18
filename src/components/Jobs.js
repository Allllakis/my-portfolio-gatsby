import React, {useState} from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"



const query = graphql`
  {
    allStrapiMyjob(sort: {fields: created_at, order: DESC}) {
      nodes {
        company
        position
        date
        desc {
          id
          name
        }
      }
    }
  }
`
const Jobs = () => {
  const data = useStaticQuery(query)

  const [value, setValue] = useState(0)
   const {allStrapiMyjob:{nodes:myjob}} = data
   const {company, position, date, desc} = myjob[value]
  
  return (
    <section className="section jobs  section-jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {myjob.map((item, index) => {
            return <button key={index} className={index === value ? "job-btn active-btn" : "job-btn"} onClick={() => setValue(index)}>
              {item.company}
            </button>
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon">
              </FaAngleDoubleRight>
              <p>{item.name}</p>
            </div>
            )
           
          })}
          
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs