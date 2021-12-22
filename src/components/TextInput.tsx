interface TextInputProps {
  tabIndex?: number;
  value?: string;
  onChange?: (e: any) => void;
}

export const TextInput = ({ tabIndex, value, onChange }: TextInputProps) => {

    const onChangeCallback = (e: string) => {
        if(onChange) {
            onChange(e);
        }
    }

  return (
    <>
      <input className="text-input" tabIndex={tabIndex} value={value} onChange={(e) => onChangeCallback(e.target.value)} />
    </>
  );
};
