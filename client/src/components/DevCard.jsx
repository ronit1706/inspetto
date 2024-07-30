import * as propTypes from "prop-types";

function DevCard(props) {

    const title = props.title
    const name = props.name
    const image = props.image
    const github = props.github
    const linkedin = props.linkedin
    const content = props.content
    return (
        <a
            href="#"
            className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 hover:scale-105 transition-all duration-200 ease-in-out"
        >
  <span
      className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                        {title}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-gray-600">{name}</p>
                </div>

                <div className="hidden sm:block sm:shrink-0">
                    <img
                        alt=""
                        src={image}
                        className="size-16 rounded-lg object-cover shadow-sm"
                    />
                </div>
            </div>

            <div className="mt-4">
                <p className="text-pretty text-sm text-gray-500">
                    {content}
                </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-blue-600">
                        <a href={linkedin} target="_blank" className={"hover:underline"}>LinkedIn</a>
                    </dt>
                    <dd className="text-xs text-gray-500">Connect</dd>
                </div>

                <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-blue-600">
                        <a href={github} target="_blank" className={"hover:underline"}>GitHub</a>
                    </dt>
                    <dd className="text-xs text-gray-500">Collaborate</dd>
                </div>
            </dl>
        </a>
    )
}

DevCard.propTypes = {
    title : propTypes.string,
    name : propTypes.string,
    image : propTypes.any,
    github : propTypes.string,
    linkedin : propTypes.string,
    content : propTypes.string,
}

export default DevCard;