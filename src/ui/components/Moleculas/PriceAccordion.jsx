import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import accordionIcon from 'src/assets/images/accordion-icon.svg';
import greenAccordionIcon from 'src/assets/images/green-accordion-icon.svg';
import blueCheckIcon from 'src/assets/images/blue-check-icon.svg';
import greenCheckIcon from 'src/assets/images/green-done.svg';
import wrongIcon from 'src/assets/images/white-wrong-icon.svg';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ bgcolor }) => ({
  borderRadius: '16px',
  background: bgcolor,
  margin: '16px 0',
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : '#F9F9FB',
  flexDirection: 'row-reverse',
  borderRadius: '16px',
  minHeight: '64px',
  '& .MuiAccordionSummary-expandIconWrapper': {
    transform: 'rotate(270deg)',
    marginRight: '10px',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(360deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function CustomizedAccordions({ bgColor }) {
  // const [expanded, setExpanded] = useState('panel1');

  // const handleChange = (panel) => (event, newExpanded) => {
  //   setExpanded(newExpanded);
  // };

  return (
    <div>
      <Accordion bgcolor={bgColor}>
        <AccordionSummary
          expandIcon={
            bgColor === '#E0F9E7' ? (
              <img src={greenAccordionIcon} alt="greenAccordionIcon" />
            ) : (
              <img src={accordionIcon} alt="AccordionIcon" />
            )
          }
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <p className="text-xl font-normal text-black-100">
            Rezyumesiz ham topshirsa bo&apos;ladimi ?
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between md:pr-8">
              <p className="text-xl text-black-100">O&apos;quv tizimi nazorati</p>
              <div className="flex w-full items-center justify-between sm:w-1/2">
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between md:pr-8">
              <p className="text-xl text-black-100">Talabalar tizimi nazorati</p>
              <div className="flex w-full items-center justify-between sm:w-1/2">
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between md:pr-8">
              <p className="text-xl text-black-100">Davomat nazorati</p>
              <div className="flex w-full items-center justify-between sm:w-1/2">
                <img src={wrongIcon} alt="wrongIcon" />
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between md:pr-8">
              <p className="text-xl text-black-100">Bolalar tarbiyasi</p>
              <div className="flex w-full items-center justify-between sm:w-1/2">
                <img src={wrongIcon} alt="wrongIcon" />
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between md:pr-8">
              <p className="text-xl text-black-100">Dam olish darslari</p>
              <div className="flex w-full items-center justify-between sm:w-1/2">
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion bgcolor={bgColor}>
        <AccordionSummary
          expandIcon={
            bgColor === '#E0F9E7' ? (
              <img src={greenAccordionIcon} alt="greenAccordionIcon" />
            ) : (
              <img src={accordionIcon} alt="AccordionIcon" />
            )
          }
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <p className="text-xl font-normal text-black-100">
            Rezyumesiz ham topshirsa bo&apos;ladimi ?
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between md:pr-8">
              <p className="text-xl text-black-100">O&apos;quv tizimi nazorati</p>
              <div className="flex w-full items-center justify-between sm:w-1/2">
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between md:pr-8">
              <p className="text-xl text-black-100">Talabalar tizimi nazorati</p>
              <div className="flex w-full items-center justify-between sm:w-1/2">
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between md:pr-8">
              <p className="text-xl text-black-100">Davomat nazorati</p>
              <div className="flex w-full items-center justify-between sm:w-1/2">
                <img src={wrongIcon} alt="wrongIcon" />
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between md:pr-8">
              <p className="text-xl text-black-100">Bolalar tarbiyasi</p>
              <div className="flex w-full items-center justify-between sm:w-1/2">
                <img src={wrongIcon} alt="wrongIcon" />
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between md:pr-8">
              <p className="text-xl text-black-100">Dam olish darslari</p>
              <div className="flex w-full items-center justify-between sm:w-1/2">
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion bgcolor={bgColor}>
        <AccordionSummary
          expandIcon={
            bgColor === '#E0F9E7' ? (
              <img src={greenAccordionIcon} alt="greenAccordionIcon" />
            ) : (
              <img src={accordionIcon} alt="AccordionIcon" />
            )
          }
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <p className="text-xl font-normal text-black-100">
            Rezyumesiz ham topshirsa bo&apos;ladimi ?
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between md:pr-8">
              <p className="text-xl text-black-100">O&apos;quv tizimi nazorati</p>
              <div className="flex w-full items-center justify-between sm:w-1/2">
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between md:pr-8">
              <p className="text-xl text-black-100">Talabalar tizimi nazorati</p>
              <div className="flex w-full items-center justify-between sm:w-1/2">
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between md:pr-8">
              <p className="text-xl text-black-100">Davomat nazorati</p>
              <div className="flex w-full items-center justify-between sm:w-1/2">
                <img src={wrongIcon} alt="wrongIcon" />
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between md:pr-8">
              <p className="text-xl text-black-100">Bolalar tarbiyasi</p>
              <div className="flex w-full items-center justify-between sm:w-1/2">
                <img src={wrongIcon} alt="wrongIcon" />
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between md:pr-8">
              <p className="text-xl text-black-100">Dam olish darslari</p>
              <div className="flex w-full items-center justify-between sm:w-1/2">
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion bgcolor={bgColor}>
        <AccordionSummary
          expandIcon={
            bgColor === '#E0F9E7' ? (
              <img src={greenAccordionIcon} alt="greenAccordionIcon" />
            ) : (
              <img src={accordionIcon} alt="AccordionIcon" />
            )
          }
          aria-controls="panel4d-content"
          id="panel4d-header"
        >
          <p className="text-xl font-normal text-black-100">
            Rezyumesiz ham topshirsa bo&apos;ladimi ?
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between md:pr-8">
              <p className="text-xl text-black-100">O&apos;quv tizimi nazorati</p>
              <div className="flex w-full items-center justify-between sm:w-1/2">
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between md:pr-8">
              <p className="text-xl text-black-100">Talabalar tizimi nazorati</p>
              <div className="flex w-full items-center justify-between sm:w-1/2">
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between md:pr-8">
              <p className="text-xl text-black-100">Davomat nazorati</p>
              <div className="flex w-full items-center justify-between sm:w-1/2">
                <img src={wrongIcon} alt="wrongIcon" />
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between md:pr-8">
              <p className="text-xl text-black-100">Bolalar tarbiyasi</p>
              <div className="flex w-full items-center justify-between sm:w-1/2">
                <img src={wrongIcon} alt="wrongIcon" />
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between md:pr-8">
              <p className="text-xl text-black-100">Dam olish darslari</p>
              <div className="flex w-full items-center justify-between sm:w-1/2">
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
                {bgColor === '#E0F9E7' ? (
                  <img src={greenCheckIcon} alt="greenCheckIcon" />
                ) : (
                  <img src={blueCheckIcon} alt="blueCheckIcon" />
                )}
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
