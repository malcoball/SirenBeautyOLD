const images = [];

class Image{
    constructor(title,src,desc){
        this.title = title;
        this.desc = desc;
        this.src = src + '.jpg';
        images.push(this);
    }
}
new Image('Powder/Ombre Brows','cardImageMicro','Pigment is implanted into the brows using a dusting technique with a machine. This created a soft airy powdery look that can be enjoyed for 18/24 months');
new Image('COMBINATION BROWS','cardImageMicroN','Skin is packed with pigment to enhance Colour for the lips. Perfectly compliments fillers for extra wow factor.');
new Image('LIP BLUSH','cardImageCombo',"Pigment is implanted into the brows using a dusting technique with a machine. This created a soft airy powdery look that can be enjoyed for 18/24 month");
new Image('MICRONEEDLING / collagens induction therepy','cardImageOmbre','This treatment results in new fresh glowing skin. Creating tiny controlled injuries in the skin allows the healing process to take form. As this happens the skin is rejuvenated with new skin cells and makes the face appear more youthful. A series of treaments are reccomended for best results.');
new Image('REMOVALS','cardImageRemoval','Removals: To remove old or unwanted permanent make up or small body tattoos. A specialised solution is tattooed into the skin to cause an osmotic reaction to lift and fade unwanted pigment. Emergency removals have to to done within 48 hours of treatment.');
new Image('REMOVALS','cardImageRemoval2','Removals: To remove old or unwanted permanent make up or small body tattoos. A specialised solution is tattooed into the skin to cause an osmotic reaction to lift and fade unwanted pigment. Emergency removals have to to done within 48 hours of treatment.');
// new Image('The Big Sea','contactBack','I wonder if people would say the sea here is just grey.');
// new Image('The Big Sea','contactBack','I wonder if people would say the sea here is just grey.');

export default images;