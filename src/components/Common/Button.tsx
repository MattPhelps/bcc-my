import Link from 'next/link';

const Button = ({
  href,
  style,
  className,
  children,
  bgColor = "bg-[#8b3eff]",
  hoverColor = "hover:bg-[#7731d8]",
  textColor = "text-white",
  onClick // Adding onClick prop
}) => {
  return (
    <div className="wow fadeInUp text-center">
      <Link href={href}>
        <div 
          style={style} 
          className={`inline-flex rounded-lg py-3 px-5 ${textColor} font-medium text-l duration-100 ease-in ${bgColor} ${hoverColor} ${className}`}
          {...(onClick ? { onClick } : {})} // Conditionally add onClick handler
        >
          {children}
        </div>
      </Link>
    </div>
  );
};

export default Button;