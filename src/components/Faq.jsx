import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./faq.css";
export const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="faq">
        <h1>Frequently Asked Questions (FAQs)</h1>
        <div className="ola">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            id="accordion"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon id="menzo" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{ width: "100%" }}
            >
              <Typography component="span" id="design">
                What is FuturePrep Ai ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                FuturePrep AI is a smart exam-prep platform for African
                students. It helps you practice WAEC, NECO, and JAMB questions
                with instant grading, step-by-step explanations, and AI-powered
                learning assistance.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            id="accordion"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon id="menzo" />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
              sx={{ width: "100%" }}
            >
              <Typography component="span" id="design">
                Who is FuturePrep AI for?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                SS1–SS3 students, JAMB candidates, schools, and parents who want
                a fast, personalized way to prepare for exams and track
                progress.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            id="accordion"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon id="menzo" />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
              sx={{ width: "100%" }}
            >
              <Typography
                component="span"
                id="design"
                sx={{ width: "100%", flexShrink: 0 }}
              >
                How does the AI help me learn better?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our AI analyzes your strengths and weaknesses, recommends the
                right questions, explains answers in simple English, and gives
                voice notes when needed
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            id="accordion"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon id="menzo" />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
              sx={{ width: "100%" }}
            >
              <Typography
                component="span"
                id="design"
                sx={{ width: "100%", flexShrink: 0 }}
              >
                Do I need internet to use it?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Basic features require internet, but we’re adding offline
                question practice soon
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
            id="accordion"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon id="menzo" />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography
                component="span"
                id="design"
                sx={{ width: "100%", flexShrink: 0 }}
              >
                What makes FuturePrep AI different
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Smarter corrections (not just “right/wrong”),Voice explanations
                Adaptive question , difficulty Track performance over time,
                Personalized study plan
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
            id="accordion"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon id="menzo" />}
              aria-controls="panel6bh-content"
              id="panel6bh-header"
            >
              <Typography
                component="span"
                id="design"
                sx={{ width: "100%", flexShrink: 0 }}
              >
                How accurate are the solutions?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                All questions are verified by real teachers and cross-checked
                with exam standards to ensure accuracy.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
            id="accordion"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon id="menzo" />}
              aria-controls="panel4bh-content"
              id="panel7bh-header"
            >
              <Typography
                component="span"
                id="design"
                sx={{ width: "100%", flexShrink: 0 }}
              >
                Can parents use it?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes—parents can track their child’s progress, weak topics, time
                spent, and overall readiness for exams.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};
