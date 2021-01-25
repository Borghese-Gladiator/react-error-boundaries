import React from 'react'

function ReloadButton() {
    return (
        <button onClick={() => window.location.reload(false)}>Reload Page</button>
    )    
}

export default ReloadButton;