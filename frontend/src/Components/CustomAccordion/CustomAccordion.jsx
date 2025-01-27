/* eslint-disable react/prop-types */

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';

import { SlArrowDown } from "react-icons/sl";

function CustomAccordion( {title} ) {
    const StyledAccordion = styled(Accordion)(({ theme }) => {
        return {
            boxShadow: 'none',
            border: `1px solid lightgray`,
            margin: "1rem 0",
            '.MuiAccordionDetails-root': {},
            '.MuiAccordionSummary-root': {},
        };
    });

    return(
        <StyledAccordion>
                    <AccordionSummary expandIcon={<SlArrowDown />} aria-controls="panel1-content" id="panel1-header">
                        <h1 className="text-2xl font-bold">{title}</h1>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam, eos exercitationem cum est provident quia, quaerat harum nulla numquam, voluptates facere iure ex voluptate maiores fugit? Est sapiente minus soluta illum quidem fugiat ducimus natus nihil alias. Unde exercitationem dolorum quam ratione excepturi enim ullam. Repudiandae id aliquid similique.
                        </p>
                        </AccordionDetails>
        </StyledAccordion>
    )
}
export default CustomAccordion