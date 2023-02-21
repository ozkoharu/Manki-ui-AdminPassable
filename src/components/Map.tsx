import React from 'react';
import * as Manki from 'api/manki';
import * as App from 'App';
import * as ReactLeaflet from 'react-leaflet';
import L from 'leaflet';
import Swal from 'sweetalert2';
import 'leaflet/dist/leaflet.css';
import './Map.css';

function Map() {
    const passableInfo = React.useContext(App.appDataContext).passableInfo as Manki.PassableInfo[];
    const mapRef = React.useRef() as React.MutableRefObject<L.Map>;
    const [tempId, setTempId] = React.useState<number>(-1);

    function addCircle(e: L.LeafletMouseEvent) {
        const form = document.forms.namedItem('form') as HTMLFormElement;
        const mode = form.elements.namedItem('mode') as RadioNodeList;
        const radius = document.getElementById('radius') as HTMLInputElement;
        if (mode.value !== 'add') {
            return;
        }
        if (radius.value.length === 0) {
            Swal.fire({
                title: "半径を入力してください",
                text: '通行可能領域の半径をメートル単位で入力してください',
                icon: 'info',
            });
            return;
        }
        passableInfo.push({position: e.latlng, radius: +radius.value, passableId: tempId});
        setTempId(tempId - 1);
    }

    function Handlers() {
        ReactLeaflet.useMapEvents({
            click: addCircle,
        });
        return(<React.Fragment />);
    }

    function Circles() {
        function generateDeleter(id: number) {
            return async function (e: L.LeafletMouseEvent) {
                const form = document.forms.namedItem('form') as HTMLFormElement;
                const mode = form.elements.namedItem('mode') as RadioNodeList;
                if (mode.value !== 'del') {
                    return;
                }
                const result = await Swal.fire({
                    titleText: '確認',
                    text: '選択した地点を削除しますか？',
                    icon: 'question',
                    showCancelButton: true,
                });
                if (!result.isConfirmed)
                    return false; // Nothing to do
                const index = passableInfo.findIndex((elem) => elem.passableId === id);
                passableInfo.splice(index, 1);
                setTempId(tempId - 1);
            }
        }
        return (
            <React.Fragment>
                {
                    passableInfo.map((elem, index) => {
                        return (
                            <ReactLeaflet.Circle
                                center={elem.position}
                                pathOptions={{fillColor: "blue"}}
                                radius={elem.radius}
                                key={index}
                                stroke={false}
                                eventHandlers={{
                                    click: generateDeleter(elem.passableId),
                                }}
                            />
                        )
                    })
                }
            </React.Fragment>
        );
    }

    return (
        <ReactLeaflet.MapContainer center={[38.72311671577611, 141.0346841825174]} zoom={12} ref={mapRef}>
            <ReactLeaflet.TileLayer
                attribution="<a href='https://maps.gsi.go.jp/development/ichiran.html'>地理院タイル</a>"
                url="https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png"
                maxNativeZoom={18}
                maxZoom={21}
                minNativeZoom={5}
                minZoom={5}
            />
            <Circles />
            <Handlers />
        </ReactLeaflet.MapContainer>
    );
}

export default Map;
