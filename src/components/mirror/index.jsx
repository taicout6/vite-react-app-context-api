import { useCount } from "../../context/count";

export default function Mirror() {
  const { count } = useCount();
  return (
    <div>
      <span>
        <b>Mirror: </b>
        { count }
      </span>
    </div>
  );
}
