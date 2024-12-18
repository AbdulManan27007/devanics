import React from 'react';
import { Button as AntButton } from 'antd'; // Renaming to avoid naming conflict
import { ArrowRightOutlined } from '@ant-design/icons';

interface ButtonProps {
  title?: string;
  description?: string;
}

const Section: React.FC<ButtonProps> = ({ title, description }) => {
  return (
    <div className="flex justify-between landing-page-container items-center py-[52px] px-[42px]">
      <div className="text-white font-formalRegular text-h3">{title}</div>
      <div className="flex justify-center flex-row items-center gap-10">
        <div className="text-white font-gelasio text-h7 max-w-[645px] w-full">
          {description}
        </div>
        <div>
          <AntButton
            type="primary"
            shape="circle"
            icon={<ArrowRightOutlined />}
            style={{
              backgroundColor: 'transparent',
              border: '2px solid #FFFFFF',
              color: '#FFFFFF',
              width: '56px',
              height: '56px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
