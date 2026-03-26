import { family } from "../data/family";
import PersonDetails from "./PersonDetails";

export default function FamilyDetails () {
    return (
      <div className="familyDetails">
        {family.map((member) => (
          <PersonDetails key={member.title} {...member} container='div' />
        ))}
      </div>
    )
}