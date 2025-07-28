import TiltedCard  from '../Reactbits/Components/TiltedCard/TiltedCard'
function ProfileImg() {
    return (
        <div>
            <TiltedCard
                imageSrc="/photo/me.jpg"
                altText="Luftphon"
                captionText="Luftphon"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                    <p className="tilted-card-demo-text">
                        Software Engineering
                    </p>
                }
            />
        </div>
    )
}

export default ProfileImg