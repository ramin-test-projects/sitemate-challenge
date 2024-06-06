export const TextInput = ({
  title,
  value,
  onChange,
}: {
  title: string;
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div>
      <div>{title}</div>
      <input
        type="text"
        value={value}
        style={{ border: "1px solid gray" }}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
