interface TagProps {
    label: string;
    }

  const Tag = ({label} : TagProps) => {
    return (
        <span className="tag bg-orange-100 text-orange-500 border-orange-500 border text-xs  px-2 py-1 rounded-full capitalize">{label}</span>
    );
}

export default Tag;