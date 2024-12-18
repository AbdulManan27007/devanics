import Image from 'next/image';

interface AccordionProps {
  isCollapsed: boolean;
  handleToggle: () => void;
  heading: string;
  bodyText: string;
}

const Accordion: React.FC<AccordionProps> = ({ 
  isCollapsed, 
  handleToggle, 
  heading, 
  bodyText 
}) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col m-6 max-w-[490px] w-full">
        <p className="heading font-gelasio text-h5 text-grayHeading">
          {heading}
        </p>
        {!isCollapsed && (
          <p className="dropdownText font-gelasio text-h6 text-grayText">
            {bodyText}
          </p>
        )}
      </div>
      <div className="p-6 w-auto">
        <button onClick={handleToggle}>
          {isCollapsed ? (
            <Image
              src="/images/landingPage/Button-collapse.png"
              width={48}
              height={48}
              alt="Button Uncollapse"
            />
          ) : (
            <Image
              src="/images/landingPage/Button-uncollapse.png"
              width={48}
              height={48}
              alt="Button uncollapse"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Accordion;
