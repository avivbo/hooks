import React from 'react'
import { UserContext, ChannelContext } from '../App';

function ComponentC() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return <ChannelContext.Consumer>
                            {
                                channel => (
                                    <div>User context value {user} and the channel is {channel}</div>
                                )
                            }
                        </ChannelContext.Consumer>
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentC
