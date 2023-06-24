import classNames from "classnames";

type PanelProps = {
  style: React.CSSProperties;
  children: React.ReactNode;
  primary: boolean;
  secondary: boolean;
  success: boolean;
  warning: boolean;
  danger: boolean;
  outline: boolean;
  rounded: boolean;
  className: string;
};

function Panel({ children, className, ...rest }: PanelProps) {
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
