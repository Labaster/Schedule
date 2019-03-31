
export default  (formComponentsLabels, errors ) => {

    errors[0].interval_break ?
        formComponentsLabels.interval_break.isValid = false :
        formComponentsLabels.interval_break.isValid = true;
    errors[0].lesson_duration ?
        formComponentsLabels.lesson_duration.isValid = false :
        formComponentsLabels.lesson_duration.isValid = true;
    errors[0].organization_name ?
        formComponentsLabels.organization_name.isValid = false :
        formComponentsLabels.organization_name.isValid = true;
    errors[0]["schedule_duration.from"] ?
        formComponentsLabels.schedule_duration.isValid = false :
        formComponentsLabels.schedule_duration.isValid = true;
    errors[0].schedule_type ?
        formComponentsLabels.schedule_type.isValid = false :
        formComponentsLabels.schedule_type.isValid = true;
    errors[0].schedule_type ?
        formComponentsLabels.schedule_type.isValid = false :
        formComponentsLabels.schedule_type.isValid = true;
    errors[0]["subjects_names_and_hours*subject_name"] ?
        formComponentsLabels.subjects.isValid = false :
        formComponentsLabels.subjects.isValid = true;
    errors[1].from ?
        formComponentsLabels.from.isValid = false :
        formComponentsLabels.from.isValid = true;
    errors[1].to ?
        formComponentsLabels.to.isValid = false :
        formComponentsLabels.to.isValid = true;
    errors["rooms.*"] ?
        formComponentsLabels.rooms.isValid = false :
        formComponentsLabels.rooms.isValid = true;
    return formComponentsLabels;
};
